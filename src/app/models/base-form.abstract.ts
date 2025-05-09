export abstract class BaseForm {

    private errored: boolean = false;
    public errorMessage: string = 'Houve um erro, tente novamente mais tarde ou entre em contato com o suporte.';

    private success: boolean = false;
    public abstract successMessage: string;

    private isLoading: boolean = false;
    private isButtonDisabled: boolean = true;

    public getErrored(): boolean {
        return this.errored;
    }

    public setErrored(_errored: boolean) {
        this.errored = _errored;
    }

    public getErrorMessage(): string {
        return this.errorMessage;
    }

    public setErrorMessage(_errorMessage: string) {
        this.errorMessage = _errorMessage;
    }

    public getSuccess(): boolean {
        return this.success;
    }

    public setSuccess(_success: boolean) {
        this.success = _success;
    }

    public getIsLoading(): boolean {
        return this.isLoading;
    }

    public setIsLoading(_isLoading: boolean) {
        this.isLoading = _isLoading;
    }

    public getIsButtonDisabled(): boolean {
        return this.isButtonDisabled;
    }

    public setIsButtonDisabled(_isButtonDisabled: boolean) {
        this.isButtonDisabled = _isButtonDisabled;
    }
}