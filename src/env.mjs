import { z } from "zod";
 
const serverOptions = z.object({  
  DATABASE_URL: z.string().min(1),  
  DATABASE_KEY: z.string().min(1),    
});

const clientOptions = z.object({  
  NEXT_PUBLIC_TEST: z.string().min(1),
  });
   
const processEnv = {
  DATABASE_URL: process.env.DATABASE_URL,
  DATABASE_KEY: process.env.DATABASE_KEY, 
  NEXT_PUBLIC_TEST: process.env.NEXT_PUBLIC_TEST,
};
 
const allOptions = serverOptions.merge(clientOptions);

 /** @typedef {z.infer<typeof allOptions>} EnvOptions */
let env =  /** @type {EnvOptions} */ (process.env);
 
const isServer = typeof window === "undefined";

const parsed =  isServer? allOptions.safeParse(processEnv) : clientOptions.safeParse(processEnv);

if (parsed.success === false) {
    console.warn(parsed.error);
    console.error("❌ Invalid environment variables:", parsed.error.flatten().fieldErrors,);
    throw new Error("Invalid environment variables");
}

const proxyHandler = {
    get(target, prop) {
      if (typeof prop !== "string") {
        return undefined;
    }
      if (!isServer && !prop.startsWith("NEXT_PUBLIC_"))
        {
            throw new Error(  "❌ Attempted to access a server-side environment variable on the client")
        }
        
      return target[(prop)];
    },
  };

env = new Proxy(parsed.data,proxyHandler);

export { env };
