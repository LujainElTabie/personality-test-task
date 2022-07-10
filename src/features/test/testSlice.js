import { createSlice } from "@reduxjs/toolkit";

const questions = [
  {
    text: "When feeling down, I seek support from others.",
    value: -1,
  },
  {
    text: "I avoid crowded places.",
    value: 1,
  },
  {
    text: "I want to meet as many people as possible.",
    value: -1,
  },
  {
    text: "Spending time with friends helps me relax and forget my problems for a while.",
    value: -1,
  },
  {
    text: "To me, reading books or watching movies is more enjoyable than spending time with people I don’t even know that well.",
    value: 1,
  },
  {
    text: "I think I can handle time alone better than most people I know.",
    value: 1,
  },
  {
    text: "I want other people to like me for my intellectual abilities rather than for being friendly.",
    value: 1,
  },
  {
    text: "I always consult others before making a decision.",
    value: -1,
  },
  {
    text: "I am a very self-reliant person.",
    value: 1,
  },
  {
    text: "Building relationships with other people is one of my priorities.",
    value: -1,
  },
  {
    text: "I don’t particularly enjoy teamwork and work much better alone.",
    value: 1,
  },
  {
    text: "I don’t think I have to tell everything to my friends.",
    value: 1,
  },
  {
    text: "I never bottle up my emotions.",
    value: -1,
  },
  {
    text: "I think small talk can be very important.",
    value: -1,
  },
  {
    text: "I can easily move to a new city because I can always make new friends.",
    value: -1,
  },
  {
    text: "I enjoy meeting new people.",
    value: -1,
  },
  {
    text: "I feel uncomfortable around overly emotional people.",
    value: 1,
  },
  {
    text: "I spend lots of time with my friends.",
    value: -1,
  },
  {
    text: "I don’t worry about being liked by strangers.",
    value: 1,
  },
  {
    text: "I need some time alone every single day.",
    value: 1,
  },
  {
    text: "I get along with open and expressive people.",
    value: -1,
  },
  {
    text: "I avoid parties.",
    value: 1,
  },
  {
    text: "Being alone for any significant period of time feels very uncomfortable.",
    value: -1,
  },
  {
    text: "I make decisions without input from others unless they are experts.",
    value: 1,
  },
  {
    text: "I never enjoyed group projects at work.",
    value: 1,
  },
  {
    text: "Making friends was always easy for me.",
    value: -1,
  },
  {
    text: "Hanging out with friends feels like a waste of time most of the time.",
    value: 1,
  },
];

const initialState = {
  value: 0,
  status: "idle",
  introvert: 0,
  extrovert: 0,
  questions: questions,
  introvertCount: 20,
  extrovertCount: 24,
  introvertAbove: 10,
  extrovertAbove: 20,
};

export const testSlice = createSlice({
  name: "counter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    reset: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.introvert = 0;
      state.extrovert = 0;
      console.log("per" + action.payload.per);
      if (action.payload.per === "Introvert") {
        console.log("hello" + state.introvertCount);
        state.introvertCount += 1;
        if (action.payload.score > 5) {
          state.introvertAbove += 1;
        }
      } else {
        state.extrovertCount += 1;
        if (action.payload.score > 5) {
          state.extrovertAbove += 1;
        }
      }
      console.log(state.extrovertCount);
    },

    agree: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (action.payload === 1) {
        state.introvert += 1;
      }
      if (action.payload === -1) {
        state.extrovert += 1;
      }
    },
    disagree: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (action.payload === -1) {
        state.introvert += 1;
      }
      if (action.payload === 1) {
        state.extrovert += 1;
      }
    },

    addQuestion: (state, action) => {
      let value;
      if (action.payload.type === "Introvert") {
        value = 1;
      }
      if (action.payload.type === "Extrovert") {
        value = -1;
      }

      state.questions.push({ text: action.payload.question, value: value });
      console.log(state.questions);
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
});

export const { addQuestion, reset, agree, disagree } = testSlice.actions;

export const selectQuestion = (state) => state.counter.questions;
export const selectIn = (state) => state.counter.introvert;
export const selectEx = (state) => state.counter.extrovert;
export const selectInC = (state) => state.counter.introvertCount;
export const selectExC = (state) => state.counter.extrovertCount;
export const selectIntrovertAbove = (state) => state.counter.introvertAbove;
export const selectExtrovertAbove = (state) => state.counter.extrovertAbove;

export default testSlice.reducer;
