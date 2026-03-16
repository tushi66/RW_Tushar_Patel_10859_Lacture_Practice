#include<iostream>
using namespace std;

class School{
  
    public:
          int rollnum;
          string name;
          int subject;
          
          void eat(){
              cout<< "Eating time......" << endl;
          }
          
          void play(){
              cout<< "Playing time......" << endl;
          }
          
          void run(){
              cout<< "Runnning time......" << endl;
          }
    
};

class Teacher : public School{
            
     public:       
        void teach(){
            
            cout<< "Teaching Time....." << endl;
            
        }
        

};

class Student : public School{
    
    public:
        void study(){
            
            cout<< "Studing time....." << endl;
        }
    
    
};

int main(){
    
    Teacher t;
    Student s;
    
    t.play();
    t.teach();
    s.play();
    s.study();
    s.eat();
    s.run();
    
    return 0;
}




