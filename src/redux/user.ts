import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { z } from "zod";

const UserSchema = z.object({
  token: z.string().default(""),
  name: z.string().default(""),
  email: z.string().email().default(""),
});

type User = z.infer<typeof UserSchema>;

const initialState: User = {
  token: "",
  name: "",
  email: "",
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
  },
});

export const { loadUserDetails } = userSlice.actions;
export default userSlice.reducer;
