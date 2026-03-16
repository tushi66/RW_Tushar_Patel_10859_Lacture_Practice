#include <iostream>
using namespace std;

class Student {
private:
    int roll;
    char name[50];
    float marks;

public:
    void input() {
        cout << "Enter Roll Number: ";
        cin >> roll;
        cin.ignore(); // to clear newline from buffer
        cout << "Enter Name: ";
        cin.getline(name, 50);
        cout << "Enter Marks: ";
        cin >> marks;
    }

    void display() {
        cout << "Roll: " << roll << ", Name: " << name << ", Marks: " << marks << endl;
    }

    int getRoll() {
        return roll;
    }
};

class StudentManager{
		private:
			
			Student s[50];
			int totalcount;
    	
    	public:
    		
    		StudentManager(){
    			totalcount = 0;
			}
			
			void addstudent(){
				
				if(totalcount<50){
					cout<< "Enter the Student Deatials... "<< totalcount+1 << endl;
				
				s[totalcount].input();
				totalcount++;
				break;
				
			}else {
			cout<< " Student are limited..."<< endl;
			}
			}
			
			
			void showall(){
				
				if(totalcount == 0){
					cout<< "Stuendt not founded...." << endl;
				 }else{
				 	
				 	cout<< "----All stuents -----" << endl;
				 	
				 	for(int i=0; i<=totalcount; i++){
				 		
				 		s[i].display();
					 } 
				 }
			}
				
				void search(int rollno){
					
					for(int i=0; i<totalcount; i++){
						if(s[i].getRoll() == rollno){
							
							cout<< " Students founded..."<< endl;
							s[i].display();
						}else
						
						cout<< " Not founded"<< endl;
					}
										
				}
				
			
    
    
    
};


int main(){
	
	
	StudentManager m;
	int ch;
	
	do {
        cout << "\n==== Student Management Menu ====\n";
        cout << "1. Add Student\n";
        cout << "2. Display All Students\n";
        cout << "3. Search by Roll Number\n";
        cout << "4. Exit\n";
        cout << "Enter choice: ";
        cin >> ch;

        switch (ch) {
            case 1:
                m.addstudent();
                break;
            case 2:
                m.showall();
                break;
            case 3:
            	int rollno;
                cout << "Enter roll number to search: ";
                cin >> rollno;
                m.search(rollno);
                break;
            case 4:
                cout << "Exiting program.\n";
                break;
            default:
                cout << "Invalid choice. Try again.\n";
        }

    } while (ch!= 4);

    return 0;
	
}
	
