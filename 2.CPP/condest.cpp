#include<iostream>
using namespace std;

class Car{
    
    public:
    
    int carnum;
    string carmodel;
    
    Car(){
        
        // cout<< "carnum " << this->carnum() << endl;
        cout<< "hello how are you..." << endl;
        
    }
    
    Car(int c,string m){
        
        this->carnum = c;
        this->carmodel = m;
        cout<< "carnum ...." << this->carnum << endl;
        cout<< "carmodel.... " << this->carmodel << endl;
        // cout<< "hello how are you..." << endl;
        
    }
    
    
    ~Car(){
        
        cout << " Thank you for your patince......" << endl;
        
    }    
    
    
};



int main(){

   Car c1;    
   Car c2(5, "A6");
   
   
   
   
   return 0;
}