export class ValidationError extends Error {
    public status: number

    constructor(message?: string, status?: string) {
        super(message);
        this.name = "ValidationError"
        this.status = 400
    }
}

export class TokenError extends Error {
    public status: number

    constructor(message?: string, status?: string) {
        super(message);
        this.name = "TokenError"
        this.status = 400
    }
}