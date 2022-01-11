// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

#![allow(dead_code)]
#![allow(unused_imports)]

use wasmlib::*;
use wasmlib::host::*;

use crate::*;
use crate::keys::*;

#[derive(Clone, Copy)]
pub struct ImmutableIncrementWithDelayParams {
    pub(crate) id: i32,
}

impl ImmutableIncrementWithDelayParams {
    pub fn delay(&self) -> ScImmutableInt32 {
		ScImmutableInt32::new(self.id, PARAM_DELAY.get_key_id())
	}
}

#[derive(Clone, Copy)]
pub struct MutableIncrementWithDelayParams {
    pub(crate) id: i32,
}

impl MutableIncrementWithDelayParams {
    pub fn delay(&self) -> ScMutableInt32 {
		ScMutableInt32::new(self.id, PARAM_DELAY.get_key_id())
	}
}

#[derive(Clone, Copy)]
pub struct ImmutableInitParams {
    pub(crate) id: i32,
}

impl ImmutableInitParams {
    pub fn counter(&self) -> ScImmutableInt64 {
		ScImmutableInt64::new(self.id, idx_map(IDX_PARAM_COUNTER))
	}
}

#[derive(Clone, Copy)]
pub struct MutableInitParams {
    pub(crate) id: i32,
}

impl MutableInitParams {
    pub fn counter(&self) -> ScMutableInt64 {
		ScMutableInt64::new(self.id, idx_map(IDX_PARAM_COUNTER))
	}
}

#[derive(Clone, Copy)]
pub struct ImmutableRepeatManyParams {
    pub(crate) id: i32,
}

impl ImmutableRepeatManyParams {
    pub fn num_repeats(&self) -> ScImmutableInt64 {
		ScImmutableInt64::new(self.id, PARAM_NUM_REPEATS.get_key_id())
	}
}

#[derive(Clone, Copy)]
pub struct MutableRepeatManyParams {
    pub(crate) id: i32,
}

impl MutableRepeatManyParams {
    pub fn num_repeats(&self) -> ScMutableInt64 {
		ScMutableInt64::new(self.id, PARAM_NUM_REPEATS.get_key_id())
	}
}

#[derive(Clone, Copy)]
pub struct ImmutableWhenMustIncrementParams {
    pub(crate) id: i32,
}

impl ImmutableWhenMustIncrementParams {
    pub fn dummy(&self) -> ScImmutableInt64 {
		ScImmutableInt64::new(self.id, PARAM_DUMMY.get_key_id())
	}
}

#[derive(Clone, Copy)]
pub struct MutableWhenMustIncrementParams {
    pub(crate) id: i32,
}

impl MutableWhenMustIncrementParams {
    pub fn dummy(&self) -> ScMutableInt64 {
		ScMutableInt64::new(self.id, PARAM_DUMMY.get_key_id())
	}
}
