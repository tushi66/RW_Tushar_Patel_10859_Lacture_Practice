#include<iostream>
using namespace std;

class Book{
	
	private:
		
		int bookid;
		string title;
		string author;
		int borrowStatus;
		 
	public:
		
		Book(){
			
			borrowStatus=0;
			
		
		} 
		
		void create(){
			
			cout<< " enter the book ID :- ";
			cin>> bookid;
			
			cout<< " enter the book Title  :- ";
			cin>> title;
			
			cout<< " enter the book Authior :- ";
			cin>> author;
			
		}
		
		void display(){
			
			
			cout<< " Book ID :- "   << bookid << endl;
			cout<< " Book title :- "   << title << endl;
			cout<< " Book author :- "   << author << endl;
		}
		
		int getid(){
			return bookid;
		}
		
		
	int borrow() {
        if (borrowStatus == 0) {
            borrowStatus = 1;
            return 1; 
        }
        return 0;  
		
	  }

    int returnbook() {
        if (borrowStatus == 1) {
            borrowStatus = 0;
            return 1; 
        }
        return 0; 
    }
		
		
};


class Library{
	
		private:
			
		Book b[100];
		int count;
		
		public:
			
			Library(){
				count= 0;
				
			}
			
			
		void addbook(){
			
			if(count<100){
				
				cout<< " Book details..." << endl;
				
				b[count].create();
				count++;
			}else

				cout<< " Book are limited..." << endl;
		}
		
		
		void showall(){
			
			if(count == 0){
				cout<< " book not found"<< endl;
				
			}else
			
			for(int i=0; i<count; i++){
				
				cout<<" All books are display" << endl;
				
				b[i].display();
			}
		}
		
		void borrow(){
			int id;
			cout << "Enter the book id:- " << endl;
			cin >> id;
			
			for(int i = 0; i<count; i++){
				if(b[i].getid() == id){
					if(b[i].borrow()){
					cout<< " Book is borroww...." << endl;
				}
				else{
					cout<< "Book is already borrowed..." << endl;
				}
				
			}
					
			return;
		}
		cout<< "Book not Founded... "<< endl;
	}
			
		void returnbook(){
			
			int id;
			cout<<" Enter the book id:- " << endl;
			cin>> id;
			
			for(int i=0; i<count;i++){
				if(b[i].getid() == id){
					if(b[i].returnbook()){
						cout<<"Book is return successfull" << endl;
					}
					else{
						cout<<"Book was not borrawed.."<<endl;
					}
					return;
				}
			}
			cout<<"Booked Not founded"<< endl;
		}
	
	
};


int main(){

		Library lb;
		int ch;
		
		do{
			
			cout<<"------Library system------" << endl;
			cout<< "Enter 1 for add book " << endl;
			cout<< "Enter 2 for Show all books " << endl;
			cout<< "Enter 3 for Borroe book " << endl;
			cout<< "Enter 4 for Return book " << endl;
			cout<< "Enter 5 for Exit.. " << endl;
			cout<< "Enter your choice..." << endl;
			cin>> ch;
			
			switch(ch){
				
				case 1:
					lb.addbook();
					
					cout<< " Book added sucessfully..." << endl;
					
					break;
					
				
				case 2:
					cout<< " ALL Books Are Display-----" << endl;
					lb.showall();
					
					break;
					
				
				case 3:
					lb.borrow();
					
					cout<< " Borrow book succesfully " << endl;
					
					break;
					
				
				case 4:
					lb.returnbook();
					
					cout<< " Retrun book succesfully...."<< endl;
					
					break;
					
				
				case 5:
					cout<< "Exited......." << endl;
					
					break;
					
				default: 
				cout<< " Invalid chioice,......" << endl;
				
				
			}
			
			
			
			
		}while(ch!=5);	
	
	
	
	return 0;
}