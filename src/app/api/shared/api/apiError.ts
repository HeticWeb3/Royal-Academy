export class ValidationError extends Error {
    public status: number

    constructor(message?: string, status?: string) {
        super(message);
        this.name = "ValidationError"
        this.status = 400
    }
}