#include<iostream>
using namespace std;

class Bank{
  
  private:
  
    int balance;
    
    public:
    
    int acc;
    string name;
    // int balance;
    
    void setbalance(int x){
        this->balance = x;
        
    }
    int getbalance(){
        return this->balance;
    }
    void setacc(int a){
        this->acc = a;
        
    }
    int getacc(){
        return this->acc;
    }
    
    void setname(string s){
        this->name =s;
        
    }
    string getname(){
        return this->name;
    }
    
};


int main(){
    
    Bank p;
    
    p.setacc(121564);
    p.setname("tushar");
    p.setbalance(50000000);
    
    
    cout << " Account num  is :- " << p.getacc() << endl;
    cout << " Account name is :- " << p.getname() << endl;
    cout << " Account balnce is :- " << p.getbalance() << endl;
    
    
    return 0;
}