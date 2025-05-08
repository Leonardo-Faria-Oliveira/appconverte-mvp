export abstract class BaseForm {

    public errored: boolean = false;
    public errorMessage: string = '';

    public success: boolean = false;
    public abstract successMessage: string;

    public isSubmiting: boolean = false;
    public isButtonDisabled: boolean = true;
    
}