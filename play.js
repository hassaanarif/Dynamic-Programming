let bugSlice = createSlice({
  name: "bug",
  initialState: {},
  reducers: {
    setBug: (state, action) => {
      state.bug = action.payload;
    },
  },
});

let store = configureStore(
  {
    reducer: {
      bug: bugSlice.reducer,
    },
  },
  [bugSlice.middleware]
);
