package iscp

import (
	"bytes"

	"golang.org/x/xerrors"

	"github.com/iotaledger/wasp/packages/hashing"
)

// StateData represent parsed data stored as a metadata in the anchor output
type StateData struct {
	Commitment hashing.HashValue
}

func StateDataFromBytes(data []byte) (StateData, error) {
	ret := StateData{}
	if len(data) != hashing.HashSize {
		return ret, xerrors.New("StateDataFromBytes: wrong bytes")
	}
	ret.Commitment, _ = hashing.HashValueFromBytes(data[:hashing.HashSize])
	return ret, nil
}

func (s *StateData) Bytes() []byte {
	var buf bytes.Buffer

	buf.Write(s.Commitment[:])
	return buf.Bytes()
}
