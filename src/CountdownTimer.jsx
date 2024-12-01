import React, { useState, useEffect } from 'react';

const CountdownToDate = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = new Date(targetDate) - now;

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timerId); // Cleanup on unmount
    }, [targetDate]);

    return (
        <>
            <div className="text-white mb-20" style={{ textAlign: 'center' }}>
                <div className='flex flex-row justify-around mt-6 md:max-2xl:mt-6'>
                    <span className='flex flex-col'>
                        <div>Days</div>
                        <div className="md:max-2xl:text-[92px] text-[40px]">{timeLeft.days}</div>
                    </span>
                    <span className='flex flex-col'>
                        <div>Hours</div>
                        <div className="md:max-2xl:text-[92px] text-[40px]">{timeLeft.hours.toString().padStart(2, '0')}</div>
                    </span>
                    <span className='flex flex-col'>
                        <div>
                            Minutes
                        </div>
                        <div className="md:max-2xl:text-[92px] text-[40px]">
                            {timeLeft.minutes.toString().padStart(2, '0')}
                        </div>
                    </span>
                    <span className='flex flex-col'>
                        <div>
                            Seconds
                        </div>
                        <div className="md:max-2xl:text-[92px] text-[40px]">
                            {timeLeft.seconds.toString().padStart(2, '0')}
                        </div>

                    </span>
                </div>
            </div>
        </>
    );
};

export default CountdownToDate;
