import React from "react";
import "../../styles/ProgramTable.css";

const ProgramTable = () => {
  return (
    <div>
      <div className='program-section'>
        <h3>홈 프로그램</h3>
        <table className='program-table'>
          <thead>
            <tr>
              <th>프로그램</th>
              <th>연령</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>생각놀이터 띵동</td>
              <td>13~60개월 (동화에 대한 이해가 가능)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='program-section'>
        <h3>유아기관 방문수업</h3>
        <table className='program-table'>
          <thead>
            <tr>
              <th>프로그램</th>
              <th>연령</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>씽씽큐 뮤직</td>
              <td>3~7세</td>
            </tr>
            <tr>
              <td>쿵치타 두!드림 (드럼,난타)</td>
              <td>5~7세</td>
            </tr>
            <tr>
              <td>룰루랄라 피아노</td>
              <td>6~7세</td>
            </tr>
            <tr>
              <td>씽명나는 장구</td>
              <td>6,7세</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='program-section'>
        <h3>유아기관 대여수업 (악기,교구,영상)</h3>
        <table className='program-table'>
          <thead>
            <tr>
              <th>프로그램</th>
              <th>연령</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>맘펴니 뮤직</td>
              <td>3~7세</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProgramTable;
