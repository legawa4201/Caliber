import { JwtPayload, sign, verify } from "jsonwebtoken";

const SECRET: string = process.env.JWT_SECRET || `RandomStringOfCharacters`;

type UserPayload = {
    id: number;
}

export function genToken(payload: UserPayload): string {
    return sign(payload, SECRET, { expiresIn: `4h` });
}

export function getPayload(token: string): JwtPayload | string {
    return verify(token, SECRET)
}