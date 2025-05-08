export class RequestError extends Error {
  
   private readonly errorMessage: string = 'Erro desconhecido';

   constructor(message: string) {
      super("Erro desconhecido");
      this.name = this.constructor.name;
      this.errorMessage = message;
   }

   public getMessage(): string {
      return this.errorMessage;
   }

}