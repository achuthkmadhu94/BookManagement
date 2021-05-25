export class bookdetailsarray {
    public BookId : number;
    public BookName : string;
    public price : string;
    public Rating : string;
    public Image: string;
    public Isadded : number;
 
     constructor(bookid : number , bookname: string , price : string , rating: string , img : string, isadded :number){
         this.BookId = bookid ,
         this.BookName =bookname,
         this.price = price,
         this.Rating=rating,
         this.Image=img
         this.Isadded=isadded;
     }
}
