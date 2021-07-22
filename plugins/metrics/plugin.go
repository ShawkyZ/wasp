package metrics

import (
	"github.com/iotaledger/hive.go/daemon"
	"github.com/iotaledger/hive.go/logger"
	"github.com/iotaledger/hive.go/node"
	"github.com/iotaledger/wasp/packages/metrics"
	"github.com/iotaledger/wasp/packages/parameters"
)

const PluginName = "Metrics"

var (
	log            *logger.Logger
	metricsManager *metrics.Metrics
)

func Init() *node.Plugin {
	return node.NewPlugin(PluginName, node.Disabled, configure, run)
}

func configure(_ *node.Plugin) {
	log = logger.NewLogger(PluginName)
	metricsManager = metrics.New()
}

func run(_ *node.Plugin) {
	if !parameters.GetBool(parameters.MetricsEnabled) {
		return
	}

	log.Infof("Starting %s ...", PluginName)
	if err := daemon.BackgroundWorker("Prometheus exporter", func(shutdownSignal <-chan struct{}) {
		log.Info("Starting Prometheus exporter ... done")

		stopped := make(chan struct{})
		go func() {
			defer close(stopped)
			if err := metricsManager.Start(); err != nil {
				log.Warnf("Error serving: %s", err)
			}
		}()
		select {
		case <-shutdownSignal:
		case <-stopped:
		}
		log.Info("Stopping %s ...", PluginName)
		defer log.Infof("Stopping %s ... done", PluginName)
		if err := metricsManager.Stop(); err != nil {
			log.Errorf("Error stopping: %s", err)
		}
	}, parameters.PriorityMetrics); err != nil {
		log.Warnf("Error starting as daemon: %s", err)
	}
}
