import { useCallback, useEffect, useReducer, useRef } from 'preact/compat';

export interface SpaceTime {
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
  months: number;
  years: number;
  date: {
    hour: number;
    minute: number;
    second: number;
    day: number;
    month: number;
    year: number;
  };
}

interface SpaceTimeMethods {
  updateSpaceTime: (date: string, countdown?: boolean) => void;
  earthTime: Date;
}

interface SpacetimeReducerState {
  startDate: Date;
  endDate: string | undefined;
  countdown: boolean | undefined;
  spaceTime: SpaceTime;
}

enum SpacetimeReducerActionKind {
  UPDATE_COUNTDOWN = 'UPDATE_COUNTDOWN',
  UPDATE_END_DATE = 'UPDATE_END_DATE',
}

interface SpacetimeReducerAction {
  type: SpacetimeReducerActionKind;
  payload: Partial<SpacetimeReducerState>;
}

const getSpaceStartDate: () => Date = () => {
  const startDate = new Date();
  startDate.setFullYear(1961);
  startDate.setMonth(3, 12);
  startDate.setHours(7);
  startDate.setMinutes(0);
  startDate.setSeconds(0);
  startDate.setMilliseconds(0);

  return startDate;
};

const calculateSpaceDate = (startDate: Date, date: Date) => {
  const passedMilliseconds = startDate.getTime() * -1 + date.getTime();

  const passedSeconds = passedMilliseconds / 1000;

  const spaceSeconds = passedSeconds;
  const spaceMinutes = passedSeconds / 100;
  const spaceHours = passedSeconds / 10_000;
  const spaceDays = passedSeconds / 100_000;
  const spaceMonths = passedSeconds / 1_000_000;
  const spaceYears = passedSeconds / 100_000_00;

  return {
    seconds: spaceSeconds,
    minutes: spaceMinutes,
    hours: spaceHours,
    days: spaceDays,
    months: spaceMonths,
    years: spaceYears,

    date: {
      hour: Math.floor(spaceHours) % 100,
      minute: Math.floor(spaceMinutes) % 100,
      second: Math.floor(spaceSeconds) % 100,
      day: (Math.floor(spaceDays) % 10) + 1,
      month: (Math.floor(spaceMonths) % 10) + 1,
      year: Math.floor(spaceYears) + 1,
    },
  };
};

const spacetimeReducer: (state: SpacetimeReducerState, action: SpacetimeReducerAction) => SpacetimeReducerState = (
  state,
  action
) => {
  const getCountdownState = () => {
    if (typeof action.payload.countdown !== 'undefined') {
      return action.payload.countdown;
    }

    return state.countdown;
  };

  switch (action.type) {
    case SpacetimeReducerActionKind.UPDATE_COUNTDOWN:
      return {
        ...state,
        countdown: action.payload.countdown,
      };
    case SpacetimeReducerActionKind.UPDATE_END_DATE:
      return {
        ...state,
        endDate: action.payload.endDate,
        countdown: getCountdownState(),
        spaceTime: calculateSpaceDate(
          state.startDate,
          action.payload.endDate ? new Date(action.payload.endDate) : new Date() // if no endDate set current time
        ),
      };
  }

  return state;
};

const useSpaceTime: (date?: string, countdown?: boolean) => SpaceTime & SpaceTimeMethods = (
  date,
  countdown = false
) => {
  const startDate = useRef<Date>(getSpaceStartDate()); // TODO: do we want to calculate passed time between two dates? Is it always 0AD?

  const intervalRef = useRef<NodeJS.Timer | null>(null);

  const [{ endDate, spaceTime, countdown: countdownState }, dispatchState] = useReducer<
    SpacetimeReducerState,
    SpacetimeReducerAction
  >(spacetimeReducer, {
    startDate: startDate.current,
    countdown,
    endDate: date,
    spaceTime: calculateSpaceDate(startDate.current, date ? new Date(date) : new Date()),
  });

  const updateEndDate = useCallback((payload: Partial<SpacetimeReducerState>) => {
    dispatchState({
      type: SpacetimeReducerActionKind.UPDATE_END_DATE,
      payload,
    });
  }, []);

  const destroyCountdown = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const updateSpaceTime = (newDate?: string, newCountdown?: boolean) => {
    updateEndDate({
      endDate: newDate,
      countdown: newDate ? false : typeof newCountdown !== 'undefined' ? newCountdown : countdown,
    });
  };

  // date change effect
  useEffect(() => {
    updateEndDate({
      endDate: date,
    });
  }, [updateEndDate, date]);

  // countdown interval
  useEffect(() => {
    destroyCountdown();

    if (countdownState) {
      intervalRef.current = setInterval(() => {
        updateEndDate({});
      }, 1000);
    }

    return () => destroyCountdown;
  }, [countdownState, updateEndDate]);

  return {
    ...spaceTime,
    updateSpaceTime,
    earthTime: endDate ? new Date(endDate) : new Date(),
  };
};

export default useSpaceTime;
