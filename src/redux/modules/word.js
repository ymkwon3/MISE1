import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    getAPI,
} from "../../api";

const getWord = createAsyncThunk("word", async data => {
    return await getAPI(`/TEST/fetest`).then(res => {
        return res.data.body
    });
});

const initialState = {
    wordList: [],
    wordListState: 'learning',
    wordConvert: true,
    sortType: 1,
};

const wordSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        convertWordVisible(state, action) {
            state.wordList[action.payload].visible = !state.wordList[action.payload].visible;
        },
        convertWordState(state, action) {
            const { index, value } = action.payload;
            state.wordList[index].state = value;
        },
        convertState(state, action) {
            state.wordListState = action.payload;
        },
        convertWord(state) {
            state.wordConvert = !state.wordConvert;
        },
        sortWordList(state, action) {
            let left, right;
            state.sortType = action.payload;
            switch (action.payload) {
                case 1:
                    state.wordList.sort((a, b) => {
                        left = a.word.toLowerCase();
                        right = b.word.toLowerCase();
                        return left > right ? 1 : -1;
                    });
                    break;
                case 2:
                    state.wordList.sort((a, b) => {
                        left = a.x_count;
                        right = b.x_count;
                        return left < right ? 1 : -1;
                    });
                    break;
                case 3:
                    state.wordList.sort((a, b) => {
                        left = a.o_count;
                        right = b.o_count;
                        return left < right ? 1 : -1;
                    });
                    break;
                case 4:
                    state.wordList.sort((a, b) => {
                        left = a.o_count + a.x_count;
                        right = b.o_count + b.x_count;
                        return left > right ? 1 : -1;
                    });
                    break;
                case 5:
                    state.wordList.sort(() => Math.random() - 0.5);
                    break;
                default: break;
            }
        },
        countIncrease(state, action) {
            const { index, type } = action.payload;
            if (type === 'o_count') {
                state.wordList[index].o_count += 1;
            } else {
                state.wordList[index].x_count += 1;
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(getWord.fulfilled, (state, action) => {
            state.wordList = action.payload.list.map(v => {
                v.visible = false;
                v.state = 'learning';
                return v;
            });
        });
    },
});

export default wordSlice.reducer;

const actionCreator = {
    getWord,
    ...wordSlice.actions,
};

export { actionCreator };
