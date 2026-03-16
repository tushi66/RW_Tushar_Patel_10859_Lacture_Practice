#include<iostream>
using namespace std;

class Person{
  
    protected:
    
    int income;
    
    public:
    
    void salary(int s){
        cout<< "salary is ..."<< s <<endl;
    }
    
    virtual void eat(){
        cout<< "Eating a dineerrr..." << endl;
    }
    
    
};


class Manager : public Person{

    public:
        
    void setincome(int n){
        cout << "The income is :- " << n <<endl;
    }
    
    void eat(){
        cout<< "Eating a lucnh..." << endl;
    }
    
    
};

class Employee : public Person{
    
    public: 
    
    void setincome(int n){
        cout << " The income is :-- " << n << endl;
    }

        void eat(){
        cout<< "Eating a Breakfast..." << endl;
    }

    
};




int main(){
    
    Person *p;
    Manager m;
    Employee e;
    
    p = &m;
    
    p->eat();
    
    m.setincome(5000);
    // p->setincome(2000);
    
    e.setincome(200);
    
    return 0;
    
}
