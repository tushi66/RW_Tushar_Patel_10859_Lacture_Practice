#include<iostream>
using namespace std;

class Student {
  
  public:
  
    int rollnum;
    string name;
    int std;
    static int count;

	void pritn(){
		cout << "hello how are oyu"<< endl;
			}

    void setrollnum(int x) {
        this->rollnum = x;
        count++;
    }

    void setname(string n) {
        this->name = n;
    }

    void setstd(int s) {
        this->std = s;
    }
};

int Student::count = 5;

int main() {
    Student s[10];

    for (int i = 0; i < 10; i++) {  
        s[i].setrollnum(i);
        // s[i].setname("Student" + to_string(i));
        // s[i].setstd(i + 1);
    }
    cout << "Count is :- " << Student::count << endl;

	
    return 0;
}
