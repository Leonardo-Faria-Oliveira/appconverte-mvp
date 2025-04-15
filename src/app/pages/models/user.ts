export interface Login{
    email:string,
    password:string
}

export interface User{

    id?: string,
    name: string,
    companyName: string,
    companyLogo?: string,
    email: string,
    password?: string,

}