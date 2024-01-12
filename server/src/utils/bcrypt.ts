import { genSalt, hash, compare } from "bcryptjs";

export async function hashPass(plainPass: string): Promise<string> {
    try {
        const salt = await genSalt(10);
        return await hash(plainPass, salt);
    } catch (error) {
        throw error;
    }
}

export async function checkPass(plainPass: string, hashedPass: string): Promise<boolean> {
    try {
        return await compare(plainPass, hashedPass);
    } catch (error) {
        throw error;
    }
}