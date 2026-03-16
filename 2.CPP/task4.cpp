#include<iostream>
using namespace std;

class Calculator{

	public:
	
	virtual void cal(double a, double b) = 0;	
	
};


class Addition: public Calculator{

	public:
		void cal(double a,double b){
			
			cout<< " The Addistion is :- "  << ( a + b ) << endl;
		}
};
class Subtraction: public Calculator{

	public:
		void cal(double a,double b){
			
			cout<< " The Subtraction is :- "<< ( a - b ) << endl;
		}
};
class Multiplication: public Calculator{

	public:
		void cal(double a,double b){
			
			cout<< " The Multiplication is :- "<< ( a * b ) << endl;
		}
};
class Division: public Calculator{

	public:
		void cal(double a,double b){
			if(b==0){
				cout<< " Error ..." << endl;
			}else
			
			cout<< " The Division is :- " << ( a / b ) << endl;
		}
};


int main(){
	
		Calculator* c;
	double n1,n2;
	int ch;

	
	do{
		
		cout<< " Calculator ......"<< endl;
		cout<< "1. Addition + " << endl;
		cout<< "2. Subtraction - " << endl;
		cout<< "3. Multiplication * " << endl;
		cout<< "4. Division /" << endl;
		cout<< "0. Exited " << endl;
		cout<< "Enter your choice...." << endl;
		cin>> ch;
		
		if(ch == 0){
			
			cout<< " Exited..." << endl;
			break;
		}else
		
		cout<< "Enter the num 1 :- " <<endl;
		cin>> n1;
		
		cout<< "Enter the num 2 :- " << endl;
		cin>> n2;
		
		 c = nullptr;  
		 
		switch(ch){
			
			case 1:
				c = new Addition();
				
				break;
				
			case 2:
				c = new Subtraction();
				
				break;
				
			case 3:
				c = new Multiplication();
				
				break;
				
			case 4:
				c = new Division();
				
				break;
				
			case 0:
				cout<< " exited...." << endl;
				
				break;
				
		
			default: 
			cout<< " Invalid choice.." << endl;
				
							
			
			
		}
		
		 if (c != nullptr) {
            c->cal(n1, n2);
            delete c;
        }
		
	}while(ch!=0);
	
	
	return 0;
}