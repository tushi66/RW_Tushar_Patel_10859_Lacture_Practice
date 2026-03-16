#include<iostream>
using namespace std;

class India{
    public:
        void name(){
            
            cout<< "Hello......" << endl;
        }
        
        void name(string name){
        
            cout << "what are you doing " << endl;
        }
        
        void name(string name, string city){
            
            cout<< "welcome " << name << " to our city" << city << endl;
        }
        
        void food(){
            
            cout<< "Vada-Pav" << endl;
        }
    
    
};

class Gujarat : public India{
        
        public:
        
        void food(){
         
         cout << "Fafda jalebi..." << endl;
            India::food();
        }
        
      
};

class Surat : public India{
    
        public:
        
        void food(){
            
            cout<< "Locho....." << endl;
        
            
        }
    
};
int main(){
    
    India i;
    Gujarat g;
    Surat s;
    
    i.name();
    i.name("tushar");
    i.name("tushar", " Surat");
    
    i.food();
    
    g.food();
    
    s.food();
    
    
    
    return 0;
}