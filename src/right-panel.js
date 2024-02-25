import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import QuestionOfTheDay from './rightbar-tabs/qotd.js';
import SubmitAnswer from './rightbar-tabs/submit-answer.js';
import PastNotes from './rightbar-tabs/past-notes.js';
import Stickerbook from './rightbar-tabs/stickerbook.js';
import TodaysNote from './rightbar-tabs/todays-note.js';
import './css/rightbar.css';

const RightPanel = (props) => {
    return (
        <>
            <div className="right-panel-container">
                {
                    props.writingNote &&
                    <Tabs defaultActiveKey="answerQuestion" variant="pills">
                        <Tab eventKey="answerQuestion" title="Answer the question of the day">
                            <div className="active-panel">
                                <QuestionOfTheDay />
                            </div>
                        </Tab>
                        <Tab eventKey="addExtras" title="Add finishing touches">
                            <div className="active-panel">
                                <SubmitAnswer />
                            </div>
                        </Tab>
                    </Tabs>
                }
                {
                    props.viewingNote &&
                    <Tabs defaultActiveKey="todaysNote" variant="pills">
                        <Tab eventKey="todaysNote" title="today's note">
                            <div className="active-panel">
                                <TodaysNote />
                            </div>
                        </Tab>
                        <Tab eventKey="pastNotes" title="past notes">
                            <div className="active-panel">
                                <PastNotes />
                            </div>
                        </Tab>
                        <Tab eventKey="stickerbook" title="stickerbook">
                            <div className="active-panel">
                                <Stickerbook />
                            </div>
                        </Tab>
                    </Tabs>
                }
            </div>
        </>
    );
}

export default RightPanel;