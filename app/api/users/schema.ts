import { z } from "zod";

const schema = z.object({
  name: z.string().min(3).max(255),
  email: z.string().email(),
});

export default schema;
