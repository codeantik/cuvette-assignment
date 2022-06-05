
import { useState } from 'react';
import './styles.css';
import html5 from '../../assets/html5.svg'
import rightArrow from '../../assets/rightArrow.svg'

export default function Modal(props) {
    const {
        modalOpen,
        handleModal,
        setData,
    } = props;


    const [rank, setRank] = useState('12,890');
    const [percentile, setPercentile] = useState('37');
    const [score, setScore] = useState('07');
    
    return (
        <div className={modalOpen ? `modal-open` : 'modal'}>
            <div className="modal-header">
                <h3 className="modal-title">Update Scores</h3>
                <img src={html5} alt="html5" />
            </div>
            <div className="modal-body">
                <div className="modal-rank">
                    <div className="modal-rank-title">
                        <div className='serial-no'>1</div>
                        <div className='label'>Update your <b>rank</b></div>
                    </div>
                    <input 
                        type="text"
                        onChange={(e) => setRank(e.target.value)}
                    />
                </div>
                <div className="modal-rank">
                    <div className="modal-rank-title">
                        <div className='serial-no'>2</div>
                        <div className='label'>Update your <b>percentile</b></div>
                    </div>
                    <input 
                        type="text" 
                        onChange={(e) => setPercentile(e.target.value)}
                    />
                </div>
                <div className="modal-rank">
                    <div className="modal-rank-title">
                        <div className='serial-no'>3</div>
                        <div className='label'>Update your <b>current score (out of 15)</b></div>
                    </div>
                    <input 
                        type="text" 
                        onChange={(e) => setScore(e.target.value)}
                    />
                </div>
            </div>
            <div className="modal-footer">
                <button 
                    className="modal-cancel"
                    onClick={handleModal}
                >
                    Cancel
                </button>
                <button 
                    className="modal-save"
                    onClick={() => {
                        console.log('save');
                        setData({
                            rank,
                            percentile,
                            score,
                        });
                        setRank('');
                        setPercentile('');
                        setScore('');
                        handleModal();
                    }}
                >
                    <p>Save</p>
                    <img src={rightArrow} alt="rightArrow" />
                </button>
            </div>
        </div>
    );
}