var user = new Object();
user.userId = 'hds1234';
user.userPw = '12342jod';
user.userAddress = '문래역';
user.phoneNumber = '01022232322';
user.name = '한동석';

console.log(user);

user.info = info;
function info() {
  console.log(this.name + '입니다');
}

user.info();
