#include<iostream>
#include<string>
using namespace std;

class Mybank {
private:
    int balance;

public:
    int acc;
    string name;

    void setbalance(int x) {
        balance = x;
    }

    int getbalance() {
        return balance;
    }
};

int main() {
    Mybank b;

    b.acc = 123456;
    b.name = "John Doe";
    b.setbalance(5000);

    cout << "Account Number: " << b.acc << endl;
    cout << "Account Holder: " << b.name << endl;
    cout << "Balance: $" << b.getbalance() << endl;

    return 0;
}
