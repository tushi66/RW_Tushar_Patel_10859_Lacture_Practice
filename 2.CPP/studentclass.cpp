#include <iostream>
using namespace std;

class Student {
public:
    int rollnum;
    string name;
    int std;
    static int count;

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

    void display() {
        cout << "Student Roll No: " << rollnum << endl;
        cout << "Student Name: " << name << endl;
        cout << "Student Standard: " << std << endl;
    }
};

int Student::count = 0;

int main() {
    
    int size;
    cout << "Enter the number of students: ";
    cin >> size;

    Student* s = new Student[size];  // dynamically allocated array

    for (int i = 0; i < size; i++) {
        int roll;
        string name;
        int standard;

        cout << "\nEnter roll number for student " << (i + 1) << ": ";
        cin >> roll;
        s[i].setrollnum(roll);

        cout << "Enter name for student " << (i + 1) << ": ";
        cin >> name;
        s[i].setname(name);

        cout << "Enter standard for student " << (i + 1) << ": ";
        cin >> standard;
        s[i].setstd(standard);
    }

    cout << "\n---- Student Details ----" << endl;
    for (int i = 0; i < size; i++) {
        cout << "\nStudent " << (i + 1) << ":" << endl;
        s[i].display();
    }

    cout << "\nTotal Students Entered: " << Student::count << endl;

    delete[] s;
    return 0;
}
