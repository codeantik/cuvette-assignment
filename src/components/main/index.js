
import { useState } from 'react';
import html5 from '../../assets/html5.svg';
import rank from '../../assets/rank.svg';
import percentile from '../../assets/percentile.svg';
import answers from '../../assets/answers.svg'
import lineGraph from '../../assets/lineGraph.svg';
// import pieGraph from '../../assets/pieGraph.svg';

import LineChart from '../charts/lineChart';
import PieChart from '../charts/pieChart';

import Modal from '../modal/index';

import './styles.css';

export default function Main() {

  const [isActive, setIsActive] = useState('skilltest');
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState({
    rank: '12,890',
    percentile: '37',
    score: '07'
  });

  const handleModal = () => setModalOpen(!modalOpen);

  return (
    <div className="main">
      <div className="sidebar">
        <div className={`dashboard ${isActive === 'dashboard' && 'sidebar-active'}`} onClick={() => setIsActive('dashboard')}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isActive === 'dashboard' ? '#445ee2' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
          <span>Dashboard</span>
        </div>
        <div className={`skilltest ${isActive === 'skilltest' && 'sidebar-active'}`} onClick={() => setIsActive('skilltest')}>
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><polyline points='12 2 19 12 12 22 3 12 12 2'></polyline></svg>
          <span>Skill Test</span>
        </div>
        <div className={`internships ${isActive === 'internships' && 'sidebar-active'}`} onClick={() => setIsActive('internships')}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
          <span>Internships</span>
        </div>
      </div>
      <div className="container">
        <div className='sidebar-active'>{isActive}</div>
        <div className="content">
          <aside className="left">
            <section className="top">
              <div className="one">
                <img src={html5} alt="html5" />
                <div className="text-content">
                  <h6>Hypertext Markup Language</h6>
                  <p>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
                </div>
              </div>
              <div className="two">
                <button
                  onClick={handleModal}
                >
                  Update
                </button>
              </div>
            </section>
            <section className="mid">
              <h5>Quick Statistics</h5>
              <div className="statistics">
                <div className="rank">
                  <img src={rank} alt="rank" />
                  <div className="rank-content">
                    <h6>{data.rank}</h6>
                    <p>Your Rank</p>
                  </div>
                </div>
                <div className="percentile">
                  <img src={percentile} alt="percentile" />
                  <div className="percentile-content">
                    <h6>{data.percentile}%</h6>
                    <p>Percentile</p>
                  </div>
                </div>
                <div className="answers">
                  <img src={answers} alt="answers" />
                  <div className="answers-content">
                    <h6>{data.score} / 15</h6>
                    <p>Correct Answers</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="bottom">
              <h5>Comparison Graph</h5>
              <div className="graph-text">
                <p>
                  <b>You scored {data.percentile}% percentile </b> which is lower than the average percentile {Math.floor((185 + parseInt(data.percentile)) / 6)}% of all the 
                  engineers who took this assessment
                </p>
                <img src={lineGraph} alt="line graph" />
              </div>
              <div className="percentile-chart">
                <LineChart data={data} />
              </div>
            </section>
          </aside>
          <aside className="right">
            <section className="subject">
              <h5>Subject Wise Analysis</h5>
              <div className="subject-body">
                <div className="subject-80">
                  <h6>HTML Tools, Forms, History</h6>
                  <div className="subject-80-body">
                    <div className="progress">
                      <div></div>
                    </div>
                    <p className="percentage">80%</p>
                  </div>
                </div>
                <div className="subject-60">
                  <h6>Tags & References in HTML</h6>
                  <div className="subject-60-body">
                    <div className="progress">
                      <div></div>
                    </div>
                    <p className="percentage">60%</p>
                  </div>
                </div>
                <div className="subject-24">
                  <h6>Tables & CSS Basics</h6>
                  <div className="subject-24-body">
                    <div className="progress">
                      <div></div>
                    </div>
                    <p className="percentage">24%</p>
                  </div>
                </div>
                <div className="subject-96">
                  <h6>Javscript & Jquery</h6>
                  <div className="subject-96-body">
                    <div className="progress">
                      <div></div>
                    </div>
                    <p className="percentage">96%</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="question">
              <div className="question-header">
                <h5>Question Analysis</h5>
                <p>{data.score} / 15</p>
              </div>
              <p className="question-body">
                <b>You scored {data.score} question correct out of 15.</b> However it still needs some improvements
              </p>
              <div className="pie-graph">
                <PieChart data={data} />
              </div>
            </section>
          </aside>
        </div>
      </div>
      <Modal 
        modalOpen={modalOpen} 
        handleModal={handleModal} 
        setData={setData}
      />
    </div>
  );
}