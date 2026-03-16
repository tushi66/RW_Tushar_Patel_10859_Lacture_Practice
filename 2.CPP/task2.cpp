#include<iostream>
using namespace std;

class Bank {
	private:
		
		int balance=1000;
		int accno;
		string name;
		
	public:
	
	void create(){
		
		cout<< "enter the Accountnum:-" << endl;
		cin>> accno;
		
		cout<< "enter the Accountname:-" << endl;
		cin>> name;
		
		cout<< "Account blance is :-"<< balance << endl;
		 
		
	}
	
	void diplay(){
		
		cout<< "Account Num    :-" << accno << endl;
		cout<< "Account Name   :-" << name <<endl;
		cout<< "Account Blance :-" << balance <<endl;
				
	}	
	int getnum(){
		return accno;
	}
	
	string getname(){
		
		return name;
	}
	
	void deposite(int amount){
		
			balance += amount;
			
			cout<< "Deposite successfull "<< balance << endl;
		
	}
	
	void withdraw(int amount){
		if(balance>= amount){
			balance -= amount;
			
			cout<< "Withraw your amount successfull" << balance << endl;
			
		}
		else{
			
			cout<< "unsufrucing balance..."<< endl;
			
		}
		
	}
	
	
	
};

class BankManager{

	private:
		Bank b[50];
		int count;
		
		public:
			
			BankManager(){
				count = 0;
			}
			
		void openacc(){
			if(count < 50){
				cout<< " Open the account *-------"<< endl;
				b[count].create();
				count++;
				
				
			}else{
				
				cout<< "Account is limited...." << endl;
			}
			
		}
		
		void showall(){
			
			for(int i=0; i<count; i++){
				
				cout<< " All Account aare display----" << endl;
				b[i].diplay();
				
			}
		}
		
		void finddep(int accno){
			
			for(int i=0; i< 50; i++){
				if(b[i].getnum() == accno){
					int amount;
					cout<<" Enter the the deposite amount :- " <<endl;
					cin>>amount;
					
					b[i].deposite(amount);
					return;
				}
			}
			cout<< "Account not founded..." << endl;
		}
		void findwith(int accno){
			
			for(int i=0; i< 50; i++){
				if(b[i].getnum() == accno){
					
					int amount;
					cout<<" Enter the the deposite amount :- " <<endl;
					cin>>amount;
					
					b[i].withdraw(amount);
					return;
				}
			}
			cout<< "Account not founded..." << endl;
		}
		
	
};

int main(){
	
	BankManager p;
	int accno;
	int ch;
	
	  do {
        cout << "\n=== Bank Menu ===\n";
        cout << "1. Open Account\n";
        cout << "2. Display All Accounts\n";
        cout << "3. Deposit\n";
        cout << "4. Withdraw\n";
        cout << "5. Exit\n";
        cout << "Enter your choice: ";
        cin >> ch;

        switch (ch) {
            case 1:
                p.openacc();
                break;
            case 2:
                p.showall();
                break;
            case 3:
                
                cout << "Enter Account Number: ";
                cin >> accno;
                p.finddep(accno);
                break;
            case 4:
            
                cout << "Enter Account Number: ";
                cin >> accno;
                p.findwith(accno);
                break;
            case 5:
                cout << "Exiting...\n";
                break;
            default:
                cout << "Invalid choice.\n";
        }
    } while (ch != 5);

    return 0;
}