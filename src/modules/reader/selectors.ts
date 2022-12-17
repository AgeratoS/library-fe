import { RootState } from "@/utils";
import { createSelector } from "@reduxjs/toolkit";

const readerContext = (state: RootState) => state.reader;

export const reader = createSelector(readerContext, (state) => state.reader);