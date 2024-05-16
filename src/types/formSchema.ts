import { z } from "zod";
import { ageItems, genderItems } from "../const/formItems";

export const formSchema = z.object({
  name: z.string().min(1, "*必須項目です。"),
  gender: z.enum(genderItems, {
    required_error: "*必須項目です。",
  }),
  age: z.enum(ageItems, {
    required_error: "*必須項目です。",
  }),
  text: z.string().min(1, "*必須項目です。"),
});
export type FormFields = z.infer<typeof formSchema>;
