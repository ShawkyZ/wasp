// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

package erc721

import "github.com/iotaledger/wasp/packages/vm/wasmlib/go/wasmlib"

func OnLoad() {
	exports := wasmlib.NewScExports()
	exports.AddFunc(FuncApprove, funcApproveThunk)
	exports.AddFunc(FuncBurn, funcBurnThunk)
	exports.AddFunc(FuncInit, funcInitThunk)
	exports.AddFunc(FuncMint, funcMintThunk)
	exports.AddFunc(FuncSafeTransferFrom, funcSafeTransferFromThunk)
	exports.AddFunc(FuncSetApprovalForAll, funcSetApprovalForAllThunk)
	exports.AddFunc(FuncTransferFrom, funcTransferFromThunk)
	exports.AddView(ViewBalanceOf, viewBalanceOfThunk)
	exports.AddView(ViewGetApproved, viewGetApprovedThunk)
	exports.AddView(ViewIsApprovedForAll, viewIsApprovedForAllThunk)
	exports.AddView(ViewName, viewNameThunk)
	exports.AddView(ViewOwnerOf, viewOwnerOfThunk)
	exports.AddView(ViewSymbol, viewSymbolThunk)
	exports.AddView(ViewTokenURI, viewTokenURIThunk)

	for i, key := range keyMap {
		idxMap[i] = key.KeyID()
	}
}

type ApproveContext struct {
	Events Erc721Events
	Params ImmutableApproveParams
	State  MutableErc721State
}

func funcApproveThunk(ctx wasmlib.ScFuncContext) {
	ctx.Log("erc721.funcApprove")
	f := &ApproveContext{
		Params: ImmutableApproveParams{
			id: wasmlib.OBJ_ID_PARAMS,
		},
		State: MutableErc721State{
			id: wasmlib.OBJ_ID_STATE,
		},
	}
	ctx.Require(f.Params.TokenID().Exists(), "missing mandatory tokenID")
	funcApprove(ctx, f)
	ctx.Log("erc721.funcApprove ok")
}

type BurnContext struct {
	Events Erc721Events
	Params ImmutableBurnParams
	State  MutableErc721State
}

func funcBurnThunk(ctx wasmlib.ScFuncContext) {
	ctx.Log("erc721.funcBurn")
	f := &BurnContext{
		Params: ImmutableBurnParams{
			id: wasmlib.OBJ_ID_PARAMS,
		},
		State: MutableErc721State{
			id: wasmlib.OBJ_ID_STATE,
		},
	}
	ctx.Require(f.Params.TokenID().Exists(), "missing mandatory tokenID")
	funcBurn(ctx, f)
	ctx.Log("erc721.funcBurn ok")
}

type InitContext struct {
	Events Erc721Events
	Params ImmutableInitParams
	State  MutableErc721State
}

func funcInitThunk(ctx wasmlib.ScFuncContext) {
	ctx.Log("erc721.funcInit")
	f := &InitContext{
		Params: ImmutableInitParams{
			id: wasmlib.OBJ_ID_PARAMS,
		},
		State: MutableErc721State{
			id: wasmlib.OBJ_ID_STATE,
		},
	}
	ctx.Require(f.Params.Name().Exists(), "missing mandatory name")
	ctx.Require(f.Params.Symbol().Exists(), "missing mandatory symbol")
	funcInit(ctx, f)
	ctx.Log("erc721.funcInit ok")
}

type MintContext struct {
	Events Erc721Events
	Params ImmutableMintParams
	State  MutableErc721State
}

func funcMintThunk(ctx wasmlib.ScFuncContext) {
	ctx.Log("erc721.funcMint")
	f := &MintContext{
		Params: ImmutableMintParams{
			id: wasmlib.OBJ_ID_PARAMS,
		},
		State: MutableErc721State{
			id: wasmlib.OBJ_ID_STATE,
		},
	}
	ctx.Require(f.Params.TokenID().Exists(), "missing mandatory tokenID")
	funcMint(ctx, f)
	ctx.Log("erc721.funcMint ok")
}

type SafeTransferFromContext struct {
	Events Erc721Events
	Params ImmutableSafeTransferFromParams
	State  MutableErc721State
}

func funcSafeTransferFromThunk(ctx wasmlib.ScFuncContext) {
	ctx.Log("erc721.funcSafeTransferFrom")
	f := &SafeTransferFromContext{
		Params: ImmutableSafeTransferFromParams{
			id: wasmlib.OBJ_ID_PARAMS,
		},
		State: MutableErc721State{
			id: wasmlib.OBJ_ID_STATE,
		},
	}
	ctx.Require(f.Params.From().Exists(), "missing mandatory from")
	ctx.Require(f.Params.To().Exists(), "missing mandatory to")
	ctx.Require(f.Params.TokenID().Exists(), "missing mandatory tokenID")
	funcSafeTransferFrom(ctx, f)
	ctx.Log("erc721.funcSafeTransferFrom ok")
}

type SetApprovalForAllContext struct {
	Events Erc721Events
	Params ImmutableSetApprovalForAllParams
	State  MutableErc721State
}

func funcSetApprovalForAllThunk(ctx wasmlib.ScFuncContext) {
	ctx.Log("erc721.funcSetApprovalForAll")
	f := &SetApprovalForAllContext{
		Params: ImmutableSetApprovalForAllParams{
			id: wasmlib.OBJ_ID_PARAMS,
		},
		State: MutableErc721State{
			id: wasmlib.OBJ_ID_STATE,
		},
	}
	ctx.Require(f.Params.Approval().Exists(), "missing mandatory approval")
	ctx.Require(f.Params.Operator().Exists(), "missing mandatory operator")
	funcSetApprovalForAll(ctx, f)
	ctx.Log("erc721.funcSetApprovalForAll ok")
}

type TransferFromContext struct {
	Events Erc721Events
	Params ImmutableTransferFromParams
	State  MutableErc721State
}

func funcTransferFromThunk(ctx wasmlib.ScFuncContext) {
	ctx.Log("erc721.funcTransferFrom")
	f := &TransferFromContext{
		Params: ImmutableTransferFromParams{
			id: wasmlib.OBJ_ID_PARAMS,
		},
		State: MutableErc721State{
			id: wasmlib.OBJ_ID_STATE,
		},
	}
	ctx.Require(f.Params.From().Exists(), "missing mandatory from")
	ctx.Require(f.Params.To().Exists(), "missing mandatory to")
	ctx.Require(f.Params.TokenID().Exists(), "missing mandatory tokenID")
	funcTransferFrom(ctx, f)
	ctx.Log("erc721.funcTransferFrom ok")
}

type BalanceOfContext struct {
	Params  ImmutableBalanceOfParams
	Results MutableBalanceOfResults
	State   ImmutableErc721State
}

func viewBalanceOfThunk(ctx wasmlib.ScViewContext) {
	ctx.Log("erc721.viewBalanceOf")
	f := &BalanceOfContext{
		Params: ImmutableBalanceOfParams{
			id: wasmlib.OBJ_ID_PARAMS,
		},
		Results: MutableBalanceOfResults{
			id: wasmlib.OBJ_ID_RESULTS,
		},
		State: ImmutableErc721State{
			id: wasmlib.OBJ_ID_STATE,
		},
	}
	ctx.Require(f.Params.Owner().Exists(), "missing mandatory owner")
	viewBalanceOf(ctx, f)
	ctx.Log("erc721.viewBalanceOf ok")
}

type GetApprovedContext struct {
	Params  ImmutableGetApprovedParams
	Results MutableGetApprovedResults
	State   ImmutableErc721State
}

func viewGetApprovedThunk(ctx wasmlib.ScViewContext) {
	ctx.Log("erc721.viewGetApproved")
	f := &GetApprovedContext{
		Params: ImmutableGetApprovedParams{
			id: wasmlib.OBJ_ID_PARAMS,
		},
		Results: MutableGetApprovedResults{
			id: wasmlib.OBJ_ID_RESULTS,
		},
		State: ImmutableErc721State{
			id: wasmlib.OBJ_ID_STATE,
		},
	}
	ctx.Require(f.Params.TokenID().Exists(), "missing mandatory tokenID")
	viewGetApproved(ctx, f)
	ctx.Log("erc721.viewGetApproved ok")
}

type IsApprovedForAllContext struct {
	Params  ImmutableIsApprovedForAllParams
	Results MutableIsApprovedForAllResults
	State   ImmutableErc721State
}

func viewIsApprovedForAllThunk(ctx wasmlib.ScViewContext) {
	ctx.Log("erc721.viewIsApprovedForAll")
	f := &IsApprovedForAllContext{
		Params: ImmutableIsApprovedForAllParams{
			id: wasmlib.OBJ_ID_PARAMS,
		},
		Results: MutableIsApprovedForAllResults{
			id: wasmlib.OBJ_ID_RESULTS,
		},
		State: ImmutableErc721State{
			id: wasmlib.OBJ_ID_STATE,
		},
	}
	ctx.Require(f.Params.Operator().Exists(), "missing mandatory operator")
	ctx.Require(f.Params.Owner().Exists(), "missing mandatory owner")
	viewIsApprovedForAll(ctx, f)
	ctx.Log("erc721.viewIsApprovedForAll ok")
}

type NameContext struct {
	Results MutableNameResults
	State   ImmutableErc721State
}

func viewNameThunk(ctx wasmlib.ScViewContext) {
	ctx.Log("erc721.viewName")
	f := &NameContext{
		Results: MutableNameResults{
			id: wasmlib.OBJ_ID_RESULTS,
		},
		State: ImmutableErc721State{
			id: wasmlib.OBJ_ID_STATE,
		},
	}
	viewName(ctx, f)
	ctx.Log("erc721.viewName ok")
}

type OwnerOfContext struct {
	Params  ImmutableOwnerOfParams
	Results MutableOwnerOfResults
	State   ImmutableErc721State
}

func viewOwnerOfThunk(ctx wasmlib.ScViewContext) {
	ctx.Log("erc721.viewOwnerOf")
	f := &OwnerOfContext{
		Params: ImmutableOwnerOfParams{
			id: wasmlib.OBJ_ID_PARAMS,
		},
		Results: MutableOwnerOfResults{
			id: wasmlib.OBJ_ID_RESULTS,
		},
		State: ImmutableErc721State{
			id: wasmlib.OBJ_ID_STATE,
		},
	}
	ctx.Require(f.Params.TokenID().Exists(), "missing mandatory tokenID")
	viewOwnerOf(ctx, f)
	ctx.Log("erc721.viewOwnerOf ok")
}

type SymbolContext struct {
	Results MutableSymbolResults
	State   ImmutableErc721State
}

func viewSymbolThunk(ctx wasmlib.ScViewContext) {
	ctx.Log("erc721.viewSymbol")
	f := &SymbolContext{
		Results: MutableSymbolResults{
			id: wasmlib.OBJ_ID_RESULTS,
		},
		State: ImmutableErc721State{
			id: wasmlib.OBJ_ID_STATE,
		},
	}
	viewSymbol(ctx, f)
	ctx.Log("erc721.viewSymbol ok")
}

type TokenURIContext struct {
	Params  ImmutableTokenURIParams
	Results MutableTokenURIResults
	State   ImmutableErc721State
}

func viewTokenURIThunk(ctx wasmlib.ScViewContext) {
	ctx.Log("erc721.viewTokenURI")
	f := &TokenURIContext{
		Params: ImmutableTokenURIParams{
			id: wasmlib.OBJ_ID_PARAMS,
		},
		Results: MutableTokenURIResults{
			id: wasmlib.OBJ_ID_RESULTS,
		},
		State: ImmutableErc721State{
			id: wasmlib.OBJ_ID_STATE,
		},
	}
	ctx.Require(f.Params.TokenID().Exists(), "missing mandatory tokenID")
	viewTokenURI(ctx, f)
	ctx.Log("erc721.viewTokenURI ok")
}
