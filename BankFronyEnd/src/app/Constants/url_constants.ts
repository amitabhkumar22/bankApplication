export class url_constants {
    public static CUSTOMER = "http://localhost:8081/account/";
    public static LOAN = "http://localhost:8081/bank/";

    //account
    public static LOGIN = url_constants.CUSTOMER + "login";
    public static REGISTER = url_constants.CUSTOMER + "registration";
    public static UPDATE = url_constants.CUSTOMER + "updateprofile";

    //loan
    public static GETLOANS = url_constants.LOAN + "getloanddetails?accountType=";

}