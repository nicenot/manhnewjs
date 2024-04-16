import './App.css';
import NQM_classcomp from './components/NQM_classcomp';
import NQM_fonctincomponrntdemo from './components/NQM_fonctincomponrntdemo';

function App() {
  const users = {
    usersName:"k22cnt1",
    password:"123456@ ",
    fistName:"Nguyễn Quang ",
    lastName:"Mạnh"
  }
  //khai báo đối tượng hàm
  function formatName(users){
    return <h2>Xin Chào, {users.fistName} {users.lastName}</h2>;
  }
  return (
    <div className="App">
      {/* biểu thức jsx */}
        <div>
          <p>fullName : {users.fistName} {users.lastName}</p>
          {formatName(users)}
        </div>


        {/*sử dụng fonction component */}
        <div>
          <NQM_fonctincomponrntdemo />
          {/*SỬ DỤNG fonctioncomponenet có props */}
          <NQM_fonctincomponrntdemo usersName="NQM" fullName="Nguyễn Quang Mạnh" age ="20"/>
        </div>

        {/*sử dụng class component */}
        <div>
          {/*dùng không sử dung props */}
          <NQM_classcomp />
          {/*sử dụng props */}
          <NQM_classcomp company="fit-NTU - K22CNTT1" course="reactjs" />
          <NQM_classcomp company="fit-NTU - K22CNTT7" course="reactjs 1" />
          <NQM_classcomp company="fit-NTU - K22CNTT8" course="reactjs 2" />
          <NQM_classcomp company="fit-NTU - K22CNTT9" course="reactjs 3" />
        </div>
    </div>
    
  );
}

export default App;
