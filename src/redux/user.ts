import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { z } from "zod";

const UserSchema = z.object({
  token: z.string().default(""),
  name: z.string().default(""),
  id: z.number(),
  email: z.string().email().default(""),
});

type User = z.infer<typeof UserSchema>;

const initialState: User = {
  token: "",
  name: "",
  email: "",
  id: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUserDetails: (state, action: PayloadAction<User>) => {
      const result = UserSchema.safeParse(action.payload);
      if (result.success) {
        return action.payload;
      } else {
        return state;
      }
    },
    removeUserDetails: (state) => {
      return initialState;
    },
  },
});

export const { loadUserDetails, removeUserDetails } = userSlice.actions;
export default userSlice.reducer;
