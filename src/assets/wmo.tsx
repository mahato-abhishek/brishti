type codeType = {
  code: number[];
  description: string;
  dayIcon: React.ReactElement;
  nightIcon: React.ReactElement;
};

export const wmoCode: codeType[] = [
  {
    code: [0],
    description: "Clear sky",
    dayIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128">
        <g id="clear-day__clear-day">
          <g id="clear-day__Sun">
            <circle
              id="clear-day__Core"
              cx="64"
              cy="64"
              r="19.5"
              fill="url(#clear-day__paint0_linear_1802_5186)"
              stroke="#f8af18"
            />
            <g id="clear-day__Rays">
              <path
                fill="#f8af18"
                d="M61 19a3 3 0 1 1 6 0v14a3 3 0 0 1-6 0zM93.699 30.059A3 3 0 1 1 97.94 34.3l-9.9 9.9a3 3 0 1 1-4.242-4.243zM109 61a3 3 0 1 1 0 6H95a3 3 0 1 1 0-6zM97.941 93.699a3 3 0 1 1-4.243 4.242l-9.899-9.9a3 3 0 1 1 4.243-4.242zM61 95a3 3 0 1 1 6 0v14a3 3 0 1 1-6 0zM39.958 83.799a3 3 0 1 1 4.243 4.243l-9.9 9.9a3 3 0 1 1-4.242-4.243zM33 61a3 3 0 1 1 0 6H19a3 3 0 0 1 0-6zM44.201 39.958a3 3 0 1 1-4.243 4.243l-9.9-9.9a3 3 0 1 1 4.243-4.242z"
              />
              <animateTransform
                attributeName="transform"
                begin="0s"
                dur="6s"
                repeatCount="indefinite"
                type="rotate"
                values="0 64.0 64.0;360 64.0 64.0"
              />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            id="clear-day__paint0_linear_1802_5186"
            x1="64"
            x2="64"
            y1="44"
            y2="84"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#fbbf24" />
            <stop offset="1" stop-color="#f8af18" />
          </linearGradient>
        </defs>
      </svg>
    ),
    nightIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128">
        <g id="clear-night__clear-night">
          <g id="clear-night__Moon">
            <path
              id="clear-night__Moon_2"
              fill="url(#clear-night__paint0_linear_1837_5080)"
              stroke="#72b9d5"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M60.302 32.582C55.282 53.7 73.6 74.348 95.325 72.515 91.52 85.77 79.2 95.5 64.536 95.5 46.837 95.5 32.5 81.344 32.5 63.898c0-16.03 12.107-29.27 27.802-31.316"
            />
            <animateTransform
              attributeName="transform"
              begin="0s"
              calcMode="spline"
              dur="3s"
              keySplines=".42 0 .58 1; .42 0 .58 1"
              repeatCount="indefinite"
              type="rotate"
              values="-6 63.9 64.0;6 63.9 64.0;-6 63.9 64.0"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id="clear-night__paint0_linear_1837_5080"
            x1="64"
            x2="64"
            y1="32"
            y2="96"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#86c3db" />
            <stop offset="1" stop-color="#72b9d5" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    code: [1],
    description: "Mainly clear",
    dayIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128">
        <g
          id="mostly-clear-day__mostly-clear-day"
          clip-path="url(#mostly-clear-day__clip0_1858_8340)"
        >
          <g id="mostly-clear-day__Sky">
            <g id="mostly-clear-day__Sun">
              <circle
                id="mostly-clear-day__Core"
                cx="50"
                cy="62"
                r="12.5"
                fill="url(#mostly-clear-day__paint0_linear_1858_8340)"
                stroke="#f8af18"
              />
              <g id="mostly-clear-day__Rays">
                <path
                  fill="#f8af18"
                  d="M48 32a2 2 0 1 1 4 0v9.333a2 2 0 1 1-4 0zM69.799 39.373a2 2 0 1 1 2.828 2.828l-6.6 6.6a2 2 0 0 1-2.828-2.829zM80 60a2 2 0 1 1 0 4h-9.333a2 2 0 1 1 0-4zM72.627 81.799a2 2 0 1 1-2.828 2.828l-6.6-6.6a2 2 0 0 1 2.829-2.828zM48 82.667a2 2 0 1 1 4 0V92a2 2 0 1 1-4 0zM33.972 75.2a2 2 0 0 1 2.829 2.828l-6.6 6.6a2 2 0 1 1-2.828-2.829zM29.333 60a2 2 0 1 1 0 4H20a2 2 0 1 1 0-4zM36.8 45.972a2 2 0 0 1-2.828 2.829l-6.6-6.6a2 2 0 1 1 2.829-2.828z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  dur="6s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 50.0 62.0;360 50.0 62.0"
                />
              </g>
            </g>
            <g id="mostly-clear-day__Clouds">
              <g id="mostly-clear-day__Cloud">
                <path
                  id="mostly-clear-day__Cloud_2"
                  fill="url(#mostly-clear-day__paint1_linear_1858_8340)"
                  stroke="#e6effc"
                  stroke-miterlimit="10"
                  d="M58.014 59.889c3.322-5.529 10.351-7.921 16.294-5.364 5.984 2.575 9.206 9.392 7.678 15.698l-.156.647.665-.03c4.915-.22 9.005 3.93 9.005 8.82 0 4.737-3.855 8.839-8.617 8.839-12.371-.011-24.747.001-37.116.001-4.784.001-8.79-3.869-9.226-8.612-.437-4.752 2.796-9.317 7.5-10.23l.477-.094-.08-.48c-.558-3.337.853-6.826 3.625-8.764 2.735-1.911 6.422-2.019 9.26-.263l.43.265z"
                />
              </g>
              <animateTransform
                attributeName="transform"
                begin="0s"
                calcMode="spline"
                dur="3s"
                keySplines=".42 0 .58 1; .42 0 .58 1"
                repeatCount="indefinite"
                type="translate"
                values="0 0;0 -3;0 0"
              />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            id="mostly-clear-day__paint0_linear_1858_8340"
            x1="50"
            x2="50"
            y1="49"
            y2="75"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#fbbf24" />
            <stop offset="1" stop-color="#f8af18" />
          </linearGradient>
          <linearGradient
            id="mostly-clear-day__paint1_linear_1858_8340"
            x1="64.001"
            x2="64.001"
            y1="53"
            y2="89"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#f3f7fe" />
            <stop offset="1" stop-color="#e6effc" />
          </linearGradient>
          <clipPath id="mostly-clear-day__clip0_1858_8340">
            <rect width="128" height="128" fill="#fff" />
          </clipPath>
        </defs>
      </svg>
    ),
    nightIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128">
        <g
          id="mostly-clear-day__mostly-clear-day"
          clip-path="url(#mostly-clear-day__clip0_1858_8340)"
        >
          <g id="mostly-clear-day__Sky">
            <g id="mostly-clear-day__Sun">
              <circle
                id="mostly-clear-day__Core"
                cx="50"
                cy="62"
                r="12.5"
                fill="url(#mostly-clear-day__paint0_linear_1858_8340)"
                stroke="#f8af18"
              />
              <g id="mostly-clear-day__Rays">
                <path
                  fill="#f8af18"
                  d="M48 32a2 2 0 1 1 4 0v9.333a2 2 0 1 1-4 0zM69.799 39.373a2 2 0 1 1 2.828 2.828l-6.6 6.6a2 2 0 0 1-2.828-2.829zM80 60a2 2 0 1 1 0 4h-9.333a2 2 0 1 1 0-4zM72.627 81.799a2 2 0 1 1-2.828 2.828l-6.6-6.6a2 2 0 0 1 2.829-2.828zM48 82.667a2 2 0 1 1 4 0V92a2 2 0 1 1-4 0zM33.972 75.2a2 2 0 0 1 2.829 2.828l-6.6 6.6a2 2 0 1 1-2.828-2.829zM29.333 60a2 2 0 1 1 0 4H20a2 2 0 1 1 0-4zM36.8 45.972a2 2 0 0 1-2.828 2.829l-6.6-6.6a2 2 0 1 1 2.829-2.828z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  dur="6s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 50.0 62.0;360 50.0 62.0"
                />
              </g>
            </g>
            <g id="mostly-clear-day__Clouds">
              <g id="mostly-clear-day__Cloud">
                <path
                  id="mostly-clear-day__Cloud_2"
                  fill="url(#mostly-clear-day__paint1_linear_1858_8340)"
                  stroke="#e6effc"
                  stroke-miterlimit="10"
                  d="M58.014 59.889c3.322-5.529 10.351-7.921 16.294-5.364 5.984 2.575 9.206 9.392 7.678 15.698l-.156.647.665-.03c4.915-.22 9.005 3.93 9.005 8.82 0 4.737-3.855 8.839-8.617 8.839-12.371-.011-24.747.001-37.116.001-4.784.001-8.79-3.869-9.226-8.612-.437-4.752 2.796-9.317 7.5-10.23l.477-.094-.08-.48c-.558-3.337.853-6.826 3.625-8.764 2.735-1.911 6.422-2.019 9.26-.263l.43.265z"
                />
              </g>
              <animateTransform
                attributeName="transform"
                begin="0s"
                calcMode="spline"
                dur="3s"
                keySplines=".42 0 .58 1; .42 0 .58 1"
                repeatCount="indefinite"
                type="translate"
                values="0 0;0 -3;0 0"
              />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            id="mostly-clear-day__paint0_linear_1858_8340"
            x1="50"
            x2="50"
            y1="49"
            y2="75"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#fbbf24" />
            <stop offset="1" stop-color="#f8af18" />
          </linearGradient>
          <linearGradient
            id="mostly-clear-day__paint1_linear_1858_8340"
            x1="64.001"
            x2="64.001"
            y1="53"
            y2="89"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#f3f7fe" />
            <stop offset="1" stop-color="#e6effc" />
          </linearGradient>
          <clipPath id="mostly-clear-day__clip0_1858_8340">
            <rect width="128" height="128" fill="#fff" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    code: [2],
    description: "Partly cloudy",
    dayIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128">
        <g
          id="partly-cloudy-day__partly-cloudy-day"
          clip-path="url(#partly-cloudy-day__clip0_1858_8241)"
        >
          <g id="partly-cloudy-day__Sky">
            <g id="partly-cloudy-day__Sun">
              <circle
                id="partly-cloudy-day__Core"
                cx="39"
                cy="51"
                r="8.5"
                fill="url(#partly-cloudy-day__paint0_linear_1858_8241)"
                stroke="#f8af18"
              />
              <g id="partly-cloudy-day__Rays">
                <path
                  fill="#f8af18"
                  d="M37.688 31.313a1.312 1.312 0 1 1 2.624 0v6.125a1.312 1.312 0 1 1-2.624 0zM51.993 36.15a1.312 1.312 0 1 1 1.856 1.857l-4.33 4.33a1.312 1.312 0 1 1-1.857-1.855zM58.688 49.688a1.312 1.312 0 1 1 0 2.624h-6.126a1.312 1.312 0 1 1 0-2.624zM53.85 63.993a1.312 1.312 0 1 1-1.857 1.856l-4.33-4.33a1.312 1.312 0 1 1 1.855-1.857zM37.688 64.563a1.312 1.312 0 1 1 2.624 0v6.124a1.312 1.312 0 1 1-2.624 0zM28.482 59.662a1.312 1.312 0 1 1 1.856 1.856l-4.331 4.331a1.312 1.312 0 1 1-1.856-1.856zM25.438 49.688a1.312 1.312 0 1 1 0 2.624h-6.125a1.312 1.312 0 1 1 0-2.624zM30.338 40.482a1.312 1.312 0 1 1-1.856 1.856l-4.331-4.331a1.312 1.312 0 1 1 1.856-1.856z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  dur="6s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 39.0 51.0;360 39.0 51.0"
                />
              </g>
            </g>
            <g id="partly-cloudy-day__Clouds">
              <g id="partly-cloudy-day__Cloud">
                <path
                  id="partly-cloudy-day__Cloud_2"
                  fill="url(#partly-cloudy-day__paint1_linear_1858_8241)"
                  stroke="#e6effc"
                  stroke-miterlimit="10"
                  d="M55.262 48.475c4.86-7.864 15.035-11.095 23.553-7.532 8.506 3.56 13.323 13.06 11.088 22.022l-.161.65.669-.03c7.01-.306 13.089 5.407 13.089 12.443 0 6.811-5.728 12.472-12.523 12.472H37.954c-6.826.002-12.751-5.33-13.395-12.14-.643-6.808 4.178-13.148 10.884-14.415l.483-.092-.084-.484c-.816-4.745 1.284-9.652 5.263-12.356 3.99-2.712 9.34-2.86 13.475-.373l.423.255z"
                />
              </g>
              <animateTransform
                attributeName="transform"
                begin="0s"
                calcMode="spline"
                dur="3s"
                keySplines=".42 0 .58 1; .42 0 .58 1"
                repeatCount="indefinite"
                type="translate"
                values="0 0;0 -3;0 0"
              />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            id="partly-cloudy-day__paint0_linear_1858_8241"
            x1="39"
            x2="39"
            y1="42"
            y2="60"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#fbbf24" />
            <stop offset="1" stop-color="#f8af18" />
          </linearGradient>
          <linearGradient
            id="partly-cloudy-day__paint1_linear_1858_8241"
            x1="64.001"
            x2="64.001"
            y1="39"
            y2="89"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#f3f7fe" />
            <stop offset="1" stop-color="#e6effc" />
          </linearGradient>
          <clipPath id="partly-cloudy-day__clip0_1858_8241">
            <rect width="128" height="128" fill="#fff" />
          </clipPath>
        </defs>
      </svg>
    ),
    nightIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128">
        <g
          id="partly-cloudy-night__partly-cloudy-night"
          clip-path="url(#partly-cloudy-night__clip0_1858_8252)"
        >
          <g id="partly-cloudy-night__Sky">
            <g id="partly-cloudy-night__Moon">
              <path
                id="partly-cloudy-night__Moon_2"
                fill="url(#partly-cloudy-night__paint0_linear_1858_8252)"
                stroke="#72b9d5"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M35.115 34.595c-1.737 8.568 5.638 16.62 14.198 16.188-1.64 5.05-6.424 8.717-12.095 8.717-7.03 0-12.718-5.621-12.718-12.541 0-6.214 4.588-11.375 10.615-12.364"
              />
              <animateTransform
                attributeName="transform"
                begin="0s"
                calcMode="spline"
                dur="3s"
                keySplines=".42 0 .58 1; .42 0 .58 1"
                repeatCount="indefinite"
                type="rotate"
                values="-6 36.9 47.0;6 36.9 47.0;-6 36.9 47.0"
              />
            </g>
            <g id="partly-cloudy-night__Clouds">
              <g id="partly-cloudy-night__Cloud">
                <path
                  id="partly-cloudy-night__Cloud_2"
                  fill="url(#partly-cloudy-night__paint1_linear_1858_8252)"
                  stroke="#e6effc"
                  stroke-miterlimit="10"
                  d="M55.262 48.475c4.86-7.864 15.035-11.095 23.553-7.532 8.506 3.56 13.323 13.06 11.088 22.022l-.161.65.669-.03c7.01-.306 13.089 5.407 13.089 12.443 0 6.811-5.728 12.472-12.523 12.472H37.954c-6.826.002-12.751-5.33-13.395-12.14-.643-6.808 4.178-13.148 10.884-14.415l.483-.092-.084-.484c-.816-4.745 1.284-9.652 5.263-12.356 3.99-2.712 9.34-2.86 13.475-.373l.423.255z"
                />
              </g>
              <animateTransform
                attributeName="transform"
                begin="0s"
                calcMode="spline"
                dur="3s"
                keySplines=".42 0 .58 1; .42 0 .58 1"
                repeatCount="indefinite"
                type="translate"
                values="0 0;0 -3;0 0"
              />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            id="partly-cloudy-night__paint0_linear_1858_8252"
            x1="37"
            x2="37"
            y1="34"
            y2="60"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#86c3db" />
            <stop offset="1" stop-color="#72b9d5" />
          </linearGradient>
          <linearGradient
            id="partly-cloudy-night__paint1_linear_1858_8252"
            x1="64.001"
            x2="64.001"
            y1="39"
            y2="89"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#f3f7fe" />
            <stop offset="1" stop-color="#e6effc" />
          </linearGradient>
          <clipPath id="partly-cloudy-night__clip0_1858_8252">
            <rect width="128" height="128" fill="#fff" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    code: [3],
    description: "Overcast",
    dayIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128">
        <g
          id="overcast-day__overcast-day"
          clip-path="url(#overcast-day__clip0_1858_8265)"
        >
          <g id="overcast-day__Sky">
            <g id="overcast-day__Sun">
              <circle
                id="overcast-day__Core"
                cx="39"
                cy="51"
                r="8.5"
                fill="url(#overcast-day__paint0_linear_1858_8265)"
                stroke="#f8af18"
              />
              <g id="overcast-day__Rays">
                <path
                  fill="#f8af18"
                  d="M37.688 31.313a1.312 1.312 0 1 1 2.624 0v6.125a1.312 1.312 0 1 1-2.624 0zM51.993 36.15a1.312 1.312 0 1 1 1.856 1.857l-4.33 4.33a1.312 1.312 0 1 1-1.857-1.855zM58.688 49.688a1.312 1.312 0 1 1 0 2.624h-6.126a1.312 1.312 0 1 1 0-2.624zM53.85 63.993a1.312 1.312 0 1 1-1.857 1.856l-4.33-4.33a1.312 1.312 0 1 1 1.855-1.857zM37.688 64.563a1.312 1.312 0 1 1 2.624 0v6.124a1.312 1.312 0 1 1-2.624 0zM28.482 59.662a1.312 1.312 0 1 1 1.856 1.856l-4.331 4.331a1.312 1.312 0 1 1-1.856-1.856zM25.438 49.688a1.312 1.312 0 1 1 0 2.624h-6.125a1.312 1.312 0 1 1 0-2.624zM30.338 40.482a1.312 1.312 0 1 1-1.856 1.856l-4.331-4.331a1.312 1.312 0 1 1 1.856-1.856z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  dur="6s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 39.0 51.0;360 39.0 51.0"
                />
              </g>
            </g>
            <g id="overcast-day__Clouds">
              <g id="overcast-day__Secondary Cloud">
                <path
                  id="overcast-day__Cloud"
                  fill="url(#overcast-day__paint1_linear_1858_8265)"
                  stroke="#94a3b8"
                  stroke-miterlimit="10"
                  d="M83.84 48.693c2.404-3.735 7.375-5.164 11.478-3.516 4.043 1.624 6.496 6.012 5.392 10.26l-.17.653.675-.029c3.281-.137 6.285 2.404 6.285 5.713 0 3.202-2.831 5.726-6.011 5.726H74.977c-3.21 0-6.132-2.382-6.448-5.593-.315-3.2 2.088-6.066 5.235-6.636l.491-.09-.088-.49c-.394-2.198.645-4.442 2.518-5.664 1.925-1.256 4.492-1.32 6.483-.17l.413.237z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="3s"
                  keySplines=".42 0 .58 1; .42 0 .58 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 -3;0 0;0 -3"
                />
              </g>
              <g id="overcast-day__Cloud_2">
                <path
                  id="overcast-day__Cloud_3"
                  fill="url(#overcast-day__paint2_linear_1858_8265)"
                  stroke="#e6effc"
                  stroke-miterlimit="10"
                  d="M55.262 48.475c4.86-7.864 15.035-11.095 23.553-7.532 8.506 3.56 13.323 13.06 11.088 22.022l-.161.65.669-.03c7.01-.306 13.089 5.407 13.089 12.443 0 6.811-5.728 12.472-12.523 12.472H37.954c-6.826.002-12.751-5.33-13.395-12.14-.643-6.808 4.178-13.148 10.884-14.415l.483-.092-.084-.484c-.816-4.745 1.284-9.652 5.263-12.356 3.99-2.712 9.34-2.86 13.475-.373l.423.255z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="3s"
                  keySplines=".42 0 .58 1; .42 0 .58 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 -3;0 0"
                />
              </g>
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            id="overcast-day__paint0_linear_1858_8265"
            x1="39"
            x2="39"
            y1="42"
            y2="60"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#fbbf24" />
            <stop offset="1" stop-color="#f8af18" />
          </linearGradient>
          <linearGradient
            id="overcast-day__paint1_linear_1858_8265"
            x1="88"
            x2="88"
            y1="44"
            y2="68"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#b0bccd" />
            <stop offset="1" stop-color="#94a3b8" />
          </linearGradient>
          <linearGradient
            id="overcast-day__paint2_linear_1858_8265"
            x1="64.001"
            x2="64.001"
            y1="39"
            y2="89"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#f3f7fe" />
            <stop offset="1" stop-color="#e6effc" />
          </linearGradient>
          <clipPath id="overcast-day__clip0_1858_8265">
            <rect width="128" height="128" fill="#fff" />
          </clipPath>
        </defs>
      </svg>
    ),
    nightIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128">
        <g id="overcast__overcast" clip-path="url(#overcast__clip0_1858_8153)">
          <g id="overcast__Sky">
            <g id="overcast__Clouds">
              <g id="overcast__Secondary Cloud">
                <path
                  id="overcast__Cloud"
                  fill="url(#overcast__paint0_linear_1858_8153)"
                  stroke="#94a3b8"
                  stroke-miterlimit="10"
                  d="M83.84 48.693c2.404-3.735 7.375-5.164 11.478-3.516 4.043 1.624 6.496 6.012 5.392 10.26l-.17.653.675-.029c3.281-.137 6.285 2.404 6.285 5.713 0 3.202-2.831 5.726-6.011 5.726H74.977c-3.21 0-6.132-2.382-6.448-5.593-.315-3.2 2.088-6.066 5.235-6.636l.491-.09-.088-.49c-.394-2.198.645-4.442 2.518-5.664 1.925-1.256 4.492-1.32 6.483-.17l.413.237z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="3s"
                  keySplines=".42 0 .58 1; .42 0 .58 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 -3;0 0;0 -3"
                />
              </g>
              <g id="overcast__Cloud_2">
                <path
                  id="overcast__Cloud_3"
                  fill="url(#overcast__paint1_linear_1858_8153)"
                  stroke="#e6effc"
                  stroke-miterlimit="10"
                  d="M55.262 48.475c4.86-7.864 15.035-11.095 23.553-7.532 8.506 3.56 13.323 13.06 11.088 22.022l-.161.65.669-.03c7.01-.306 13.089 5.407 13.089 12.443 0 6.811-5.728 12.472-12.523 12.472H37.954c-6.826.002-12.751-5.33-13.395-12.14-.643-6.808 4.178-13.148 10.884-14.415l.483-.092-.084-.484c-.816-4.745 1.284-9.652 5.263-12.356 3.99-2.712 9.34-2.86 13.475-.373l.423.255z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="3s"
                  keySplines=".42 0 .58 1; .42 0 .58 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 -3;0 0"
                />
              </g>
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            id="overcast__paint0_linear_1858_8153"
            x1="88"
            x2="88"
            y1="44"
            y2="68"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#b0bccd" />
            <stop offset="1" stop-color="#94a3b8" />
          </linearGradient>
          <linearGradient
            id="overcast__paint1_linear_1858_8153"
            x1="64.001"
            x2="64.001"
            y1="39"
            y2="89"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#f3f7fe" />
            <stop offset="1" stop-color="#e6effc" />
          </linearGradient>
          <clipPath id="overcast__clip0_1858_8153">
            <rect width="128" height="128" fill="#fff" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    code: [45, 48],
    description: "Fog",
    dayIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128">
        <g
          id="overcast-day-fog__overcast-day-fog"
          clip-path="url(#overcast-day-fog__clip0_1858_9386)"
        >
          <g id="overcast-day-fog__Sky">
            <g id="overcast-day-fog__Sun">
              <circle
                id="overcast-day-fog__Core"
                cx="39"
                cy="51"
                r="8.5"
                fill="url(#overcast-day-fog__paint0_linear_1858_9386)"
                stroke="#f8af18"
              />
              <g id="overcast-day-fog__Rays">
                <path
                  fill="#f8af18"
                  d="M37.688 31.313a1.312 1.312 0 1 1 2.624 0v6.125a1.312 1.312 0 1 1-2.624 0zM51.993 36.15a1.312 1.312 0 1 1 1.856 1.857l-4.33 4.33a1.312 1.312 0 1 1-1.857-1.855zM58.688 49.688a1.312 1.312 0 1 1 0 2.624h-6.126a1.312 1.312 0 1 1 0-2.624zM53.85 63.993a1.312 1.312 0 1 1-1.857 1.856l-4.33-4.33a1.312 1.312 0 1 1 1.855-1.857zM37.688 64.563a1.312 1.312 0 1 1 2.624 0v6.124a1.312 1.312 0 1 1-2.624 0zM28.482 59.662a1.312 1.312 0 1 1 1.856 1.856l-4.331 4.331a1.312 1.312 0 1 1-1.856-1.856zM25.438 49.688a1.312 1.312 0 1 1 0 2.624h-6.125a1.312 1.312 0 1 1 0-2.624zM30.338 40.482a1.312 1.312 0 1 1-1.856 1.856l-4.331-4.331a1.312 1.312 0 1 1 1.856-1.856z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  dur="6s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 39.0 51.0;360 39.0 51.0"
                />
              </g>
            </g>
            <g id="overcast-day-fog__Clouds">
              <g id="overcast-day-fog__Secondary Cloud">
                <path
                  id="overcast-day-fog__Cloud"
                  fill="url(#overcast-day-fog__paint1_linear_1858_9386)"
                  stroke="#94a3b8"
                  stroke-miterlimit="10"
                  d="M83.84 48.693c2.404-3.735 7.375-5.164 11.478-3.516 4.043 1.624 6.496 6.012 5.392 10.26l-.169.653.674-.029c3.281-.137 6.285 2.404 6.285 5.713 0 3.202-2.831 5.726-6.011 5.726H74.977c-3.209 0-6.132-2.382-6.448-5.593-.315-3.2 2.088-6.066 5.235-6.636l.491-.09-.087-.49c-.394-2.198.644-4.442 2.517-5.664 1.926-1.256 4.492-1.32 6.483-.17l.413.237z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="3s"
                  keySplines=".42 0 .58 1; .42 0 .58 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 -3;0 0;0 -3"
                />
              </g>
              <g id="overcast-day-fog__Cloud_2">
                <path
                  id="overcast-day-fog__Cloud_3"
                  fill="url(#overcast-day-fog__paint2_linear_1858_9386)"
                  stroke="#e6effc"
                  stroke-miterlimit="10"
                  d="M55.262 48.475c4.86-7.864 15.035-11.095 23.553-7.532 8.506 3.56 13.323 13.06 11.088 22.022l-.161.65.669-.03c7.01-.306 13.089 5.407 13.089 12.443 0 6.811-5.728 12.472-12.523 12.472H37.954c-6.826.002-12.751-5.33-13.395-12.14-.643-6.808 4.178-13.148 10.884-14.415l.483-.092-.084-.484c-.816-4.745 1.284-9.652 5.263-12.356 3.99-2.712 9.34-2.86 13.475-.373l.423.255z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="3s"
                  keySplines=".42 0 .58 1; .42 0 .58 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 -3;0 0"
                />
              </g>
            </g>
          </g>
          <g id="overcast-day-fog__Precipitation">
            <path
              id="overcast-day-fog__Line 2"
              stroke="#e2e8f0"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="3"
              d="M40 95h48"
            >
              <animateTransform
                attributeName="transform"
                begin="0s"
                calcMode="spline"
                dur="3s"
                keySplines=".42 0 .58 1; .42 0 .58 1"
                repeatCount="indefinite"
                type="translate"
                values="0 0;3 0;0 0"
              />
            </path>
            <path
              id="overcast-day-fog__Line 1"
              stroke="#e2e8f0"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="3"
              d="M40 103h48"
            >
              <animateTransform
                attributeName="transform"
                begin="-2.8s"
                calcMode="spline"
                dur="3s"
                keySplines=".42 0 .58 1; .42 0 .58 1"
                repeatCount="indefinite"
                type="translate"
                values="0 0;3 0;0 0"
              />
            </path>
          </g>
        </g>
        <defs>
          <linearGradient
            id="overcast-day-fog__paint0_linear_1858_9386"
            x1="39"
            x2="39"
            y1="42"
            y2="60"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#fbbf24" />
            <stop offset="1" stop-color="#f8af18" />
          </linearGradient>
          <linearGradient
            id="overcast-day-fog__paint1_linear_1858_9386"
            x1="88"
            x2="88"
            y1="44"
            y2="68"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#b0bccd" />
            <stop offset="1" stop-color="#94a3b8" />
          </linearGradient>
          <linearGradient
            id="overcast-day-fog__paint2_linear_1858_9386"
            x1="64.001"
            x2="64.001"
            y1="39"
            y2="89"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#f3f7fe" />
            <stop offset="1" stop-color="#e6effc" />
          </linearGradient>
          <clipPath id="overcast-day-fog__clip0_1858_9386">
            <rect width="128" height="128" fill="#fff" />
          </clipPath>
        </defs>
      </svg>
    ),
    nightIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128">
        <g
          id="overcast-night-fog__overcast-night-fog"
          clip-path="url(#overcast-night-fog__clip0_1858_9389)"
        >
          <g id="overcast-night-fog__Sky">
            <g id="overcast-night-fog__Moon">
              <path
                id="overcast-night-fog__Moon_2"
                fill="url(#overcast-night-fog__paint0_linear_1858_9389)"
                stroke="#72b9d5"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M35.115 34.595c-1.737 8.568 5.638 16.62 14.198 16.188-1.64 5.05-6.424 8.717-12.095 8.717-7.03 0-12.718-5.621-12.718-12.541 0-6.214 4.588-11.375 10.615-12.364"
              />
              <animateTransform
                attributeName="transform"
                begin="0s"
                calcMode="spline"
                dur="3s"
                keySplines=".42 0 .58 1; .42 0 .58 1"
                repeatCount="indefinite"
                type="rotate"
                values="-6 36.9 47.0;6 36.9 47.0;-6 36.9 47.0"
              />
            </g>
            <g id="overcast-night-fog__Clouds">
              <g id="overcast-night-fog__Secondary Cloud">
                <path
                  id="overcast-night-fog__Cloud"
                  fill="url(#overcast-night-fog__paint1_linear_1858_9389)"
                  stroke="#94a3b8"
                  stroke-miterlimit="10"
                  d="M83.84 48.693c2.404-3.735 7.375-5.164 11.478-3.516 4.043 1.624 6.496 6.012 5.392 10.26l-.169.653.674-.029c3.281-.137 6.285 2.404 6.285 5.713 0 3.202-2.831 5.726-6.011 5.726H74.977c-3.209 0-6.132-2.382-6.448-5.593-.315-3.2 2.088-6.066 5.235-6.636l.491-.09-.087-.49c-.394-2.198.644-4.442 2.517-5.664 1.926-1.256 4.492-1.32 6.483-.17l.413.237z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="3s"
                  keySplines=".42 0 .58 1; .42 0 .58 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 -3;0 0;0 -3"
                />
              </g>
              <g id="overcast-night-fog__Cloud_2">
                <path
                  id="overcast-night-fog__Cloud_3"
                  fill="url(#overcast-night-fog__paint2_linear_1858_9389)"
                  stroke="#e6effc"
                  stroke-miterlimit="10"
                  d="M55.262 48.475c4.86-7.864 15.035-11.095 23.553-7.532 8.506 3.56 13.323 13.06 11.088 22.022l-.161.65.669-.03c7.01-.306 13.089 5.407 13.089 12.443 0 6.811-5.728 12.472-12.523 12.472H37.954c-6.826.002-12.751-5.33-13.395-12.14-.643-6.808 4.178-13.148 10.884-14.415l.483-.092-.084-.484c-.816-4.745 1.284-9.652 5.263-12.356 3.99-2.712 9.34-2.86 13.475-.373l.423.255z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="3s"
                  keySplines=".42 0 .58 1; .42 0 .58 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 -3;0 0"
                />
              </g>
            </g>
          </g>
          <g id="overcast-night-fog__Precipitation">
            <path
              id="overcast-night-fog__Line 2"
              stroke="#e2e8f0"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="3"
              d="M40 95h48"
            >
              <animateTransform
                attributeName="transform"
                begin="0s"
                calcMode="spline"
                dur="3s"
                keySplines=".42 0 .58 1; .42 0 .58 1"
                repeatCount="indefinite"
                type="translate"
                values="0 0;3 0;0 0"
              />
            </path>
            <path
              id="overcast-night-fog__Line 1"
              stroke="#e2e8f0"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="3"
              d="M40 103h48"
            >
              <animateTransform
                attributeName="transform"
                begin="-2.8s"
                calcMode="spline"
                dur="3s"
                keySplines=".42 0 .58 1; .42 0 .58 1"
                repeatCount="indefinite"
                type="translate"
                values="0 0;3 0;0 0"
              />
            </path>
          </g>
        </g>
        <defs>
          <linearGradient
            id="overcast-night-fog__paint0_linear_1858_9389"
            x1="37"
            x2="37"
            y1="34"
            y2="60"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#86c3db" />
            <stop offset="1" stop-color="#72b9d5" />
          </linearGradient>
          <linearGradient
            id="overcast-night-fog__paint1_linear_1858_9389"
            x1="88"
            x2="88"
            y1="44"
            y2="68"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#b0bccd" />
            <stop offset="1" stop-color="#94a3b8" />
          </linearGradient>
          <linearGradient
            id="overcast-night-fog__paint2_linear_1858_9389"
            x1="64.001"
            x2="64.001"
            y1="39"
            y2="89"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#f3f7fe" />
            <stop offset="1" stop-color="#e6effc" />
          </linearGradient>
          <clipPath id="overcast-night-fog__clip0_1858_9389">
            <rect width="128" height="128" fill="#fff" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    code: [51, 53, 55, 56, 57],
    description: "Drizzle",
    dayIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128">
        <g
          id="mostly-clear-day-drizzle__mostly-clear-day-drizzle"
          clip-path="url(#mostly-clear-day-drizzle__clip0_1858_8539)"
        >
          <g id="mostly-clear-day-drizzle__Sky">
            <g id="mostly-clear-day-drizzle__Sun">
              <circle
                id="mostly-clear-day-drizzle__Core"
                cx="50"
                cy="62"
                r="12.5"
                fill="url(#mostly-clear-day-drizzle__paint0_linear_1858_8539)"
                stroke="#f8af18"
              />
              <g id="mostly-clear-day-drizzle__Rays">
                <path
                  fill="#f8af18"
                  d="M48 32a2 2 0 1 1 4 0v9.333a2 2 0 1 1-4 0zM69.799 39.373a2 2 0 1 1 2.828 2.828l-6.6 6.6a2 2 0 0 1-2.828-2.829zM80 60a2 2 0 1 1 0 4h-9.333a2 2 0 1 1 0-4zM72.627 81.799a2 2 0 1 1-2.828 2.828l-6.6-6.6a2 2 0 0 1 2.829-2.828zM48 82.667a2 2 0 1 1 4 0V92a2 2 0 1 1-4 0zM33.972 75.2a2 2 0 0 1 2.829 2.828l-6.6 6.6a2 2 0 1 1-2.828-2.829zM29.333 60a2 2 0 1 1 0 4H20a2 2 0 1 1 0-4zM36.8 45.972a2 2 0 0 1-2.828 2.829l-6.6-6.6a2 2 0 1 1 2.829-2.828z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  dur="6s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 50.0 62.0;360 50.0 62.0"
                />
              </g>
            </g>
            <g id="mostly-clear-day-drizzle__Clouds">
              <g id="mostly-clear-day-drizzle__Cloud">
                <path
                  id="mostly-clear-day-drizzle__Cloud_2"
                  fill="url(#mostly-clear-day-drizzle__paint1_linear_1858_8539)"
                  stroke="#e6effc"
                  stroke-miterlimit="10"
                  d="M58.014 59.889c3.322-5.529 10.351-7.921 16.294-5.364 5.984 2.575 9.206 9.392 7.678 15.698l-.156.647.665-.03c4.915-.22 9.004 3.93 9.004 8.82 0 4.737-3.854 8.839-8.616 8.839-12.371-.011-24.747.001-37.116.001-4.784.001-8.79-3.869-9.227-8.612-.436-4.752 2.797-9.317 7.5-10.23l.478-.094-.08-.48c-.558-3.337.853-6.826 3.625-8.764 2.734-1.911 6.422-2.019 9.26-.263l.43.265z"
                />
              </g>
              <animateTransform
                attributeName="transform"
                begin="0s"
                calcMode="spline"
                dur="3s"
                keySplines=".42 0 .58 1; .42 0 .58 1"
                repeatCount="indefinite"
                type="translate"
                values="0 0;0 -3;0 0"
              />
            </g>
          </g>
          <g id="mostly-clear-day-drizzle__Precipitation">
            <g id="mostly-clear-day-drizzle__Raindrops">
              <path
                id="mostly-clear-day-drizzle__Raindrop 1"
                stroke="#0a5ad4"
                stroke-linecap="round"
                stroke-width="4"
                d="M52 87v3"
              >
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="0s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
              <path
                id="mostly-clear-day-drizzle__Raindrop 2"
                stroke="#0a5ad4"
                stroke-linecap="round"
                stroke-width="4"
                d="M64 87v3"
              >
                <animateTransform
                  attributeName="transform"
                  begin="-0.6s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="-0.6s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
              <path
                id="mostly-clear-day-drizzle__Raindrop 3"
                stroke="#0a5ad4"
                stroke-linecap="round"
                stroke-width="4"
                d="M76 87v3"
              >
                <animateTransform
                  attributeName="transform"
                  begin="-0.19999999999999996s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="-0.19999999999999996s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            id="mostly-clear-day-drizzle__paint0_linear_1858_8539"
            x1="50"
            x2="50"
            y1="49"
            y2="75"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#fbbf24" />
            <stop offset="1" stop-color="#f8af18" />
          </linearGradient>
          <linearGradient
            id="mostly-clear-day-drizzle__paint1_linear_1858_8539"
            x1="64.001"
            x2="64.001"
            y1="53"
            y2="89"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#f3f7fe" />
            <stop offset="1" stop-color="#e6effc" />
          </linearGradient>
          <clipPath id="mostly-clear-day-drizzle__clip0_1858_8539">
            <rect width="128" height="128" fill="#fff" />
          </clipPath>
        </defs>
      </svg>
    ),
    nightIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128">
        <g
          id="overcast-night-drizzle__overcast-night-drizzle"
          clip-path="url(#overcast-night-drizzle__clip0_1858_8527)"
        >
          <g id="overcast-night-drizzle__Sky">
            <g id="overcast-night-drizzle__Moon">
              <path
                id="overcast-night-drizzle__Moon_2"
                fill="url(#overcast-night-drizzle__paint0_linear_1858_8527)"
                stroke="#72b9d5"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M35.115 34.595c-1.737 8.568 5.638 16.62 14.198 16.188-1.64 5.05-6.424 8.717-12.095 8.717-7.03 0-12.718-5.621-12.718-12.541 0-6.214 4.588-11.375 10.615-12.364"
              />
              <animateTransform
                attributeName="transform"
                begin="0s"
                calcMode="spline"
                dur="3s"
                keySplines=".42 0 .58 1; .42 0 .58 1"
                repeatCount="indefinite"
                type="rotate"
                values="-6 36.9 47.0;6 36.9 47.0;-6 36.9 47.0"
              />
            </g>
            <g id="overcast-night-drizzle__Clouds">
              <g id="overcast-night-drizzle__Secondary Cloud">
                <path
                  id="overcast-night-drizzle__Cloud"
                  fill="url(#overcast-night-drizzle__paint1_linear_1858_8527)"
                  stroke="#94a3b8"
                  stroke-miterlimit="10"
                  d="M83.84 48.693c2.404-3.735 7.375-5.164 11.478-3.516 4.043 1.624 6.496 6.012 5.392 10.26l-.17.653.675-.029c3.281-.137 6.285 2.404 6.285 5.713 0 3.202-2.831 5.726-6.011 5.726H74.977c-3.21 0-6.132-2.382-6.448-5.593-.315-3.2 2.088-6.066 5.235-6.636l.491-.09-.088-.49c-.394-2.198.645-4.442 2.518-5.664 1.925-1.256 4.492-1.32 6.483-.17l.413.237z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="3s"
                  keySplines=".42 0 .58 1; .42 0 .58 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 -3;0 0;0 -3"
                />
              </g>
              <g id="overcast-night-drizzle__Cloud_2">
                <path
                  id="overcast-night-drizzle__Cloud_3"
                  fill="url(#overcast-night-drizzle__paint2_linear_1858_8527)"
                  stroke="#e6effc"
                  stroke-miterlimit="10"
                  d="M55.262 48.475c4.86-7.864 15.035-11.095 23.553-7.532 8.506 3.56 13.323 13.06 11.088 22.022l-.161.65.669-.03c7.01-.306 13.089 5.407 13.089 12.443 0 6.811-5.728 12.472-12.523 12.472H37.954c-6.826.002-12.751-5.33-13.395-12.14-.643-6.808 4.178-13.148 10.884-14.415l.483-.092-.084-.484c-.816-4.745 1.284-9.652 5.263-12.356 3.99-2.712 9.34-2.86 13.475-.373l.423.255z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="3s"
                  keySplines=".42 0 .58 1; .42 0 .58 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 -3;0 0"
                />
              </g>
            </g>
          </g>
          <g id="overcast-night-drizzle__Precipitation">
            <g id="overcast-night-drizzle__Raindrops">
              <path
                id="overcast-night-drizzle__Raindrop 1"
                stroke="#0a5ad4"
                stroke-linecap="round"
                stroke-width="4"
                d="M52 87v3"
              >
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="0s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
              <path
                id="overcast-night-drizzle__Raindrop 2"
                stroke="#0a5ad4"
                stroke-linecap="round"
                stroke-width="4"
                d="M64 87v3"
              >
                <animateTransform
                  attributeName="transform"
                  begin="-0.6s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="-0.6s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
              <path
                id="overcast-night-drizzle__Raindrop 3"
                stroke="#0a5ad4"
                stroke-linecap="round"
                stroke-width="4"
                d="M76 87v3"
              >
                <animateTransform
                  attributeName="transform"
                  begin="-0.19999999999999996s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="-0.19999999999999996s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            id="overcast-night-drizzle__paint0_linear_1858_8527"
            x1="37"
            x2="37"
            y1="34"
            y2="60"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#86c3db" />
            <stop offset="1" stop-color="#72b9d5" />
          </linearGradient>
          <linearGradient
            id="overcast-night-drizzle__paint1_linear_1858_8527"
            x1="88"
            x2="88"
            y1="44"
            y2="68"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#b0bccd" />
            <stop offset="1" stop-color="#94a3b8" />
          </linearGradient>
          <linearGradient
            id="overcast-night-drizzle__paint2_linear_1858_8527"
            x1="64.001"
            x2="64.001"
            y1="39"
            y2="89"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#f3f7fe" />
            <stop offset="1" stop-color="#e6effc" />
          </linearGradient>
          <clipPath id="overcast-night-drizzle__clip0_1858_8527">
            <rect width="128" height="128" fill="#fff" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    code: [61, 63, 65],
    description: "Rain",
    dayIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128">
        <g
          id="overcast-day-rain__overcast-day-rain"
          clip-path="url(#overcast-day-rain__clip0_1858_8378)"
        >
          <g id="overcast-day-rain__Sky">
            <g id="overcast-day-rain__Sun">
              <circle
                id="overcast-day-rain__Core"
                cx="39"
                cy="51"
                r="8.5"
                fill="url(#overcast-day-rain__paint0_linear_1858_8378)"
                stroke="#f8af18"
              />
              <g id="overcast-day-rain__Rays">
                <path
                  fill="#f8af18"
                  d="M37.688 31.313a1.312 1.312 0 1 1 2.624 0v6.125a1.312 1.312 0 1 1-2.624 0zM51.993 36.15a1.312 1.312 0 1 1 1.856 1.857l-4.33 4.33a1.312 1.312 0 1 1-1.857-1.855zM58.688 49.688a1.312 1.312 0 1 1 0 2.624h-6.126a1.312 1.312 0 1 1 0-2.624zM53.85 63.993a1.312 1.312 0 1 1-1.857 1.856l-4.33-4.33a1.312 1.312 0 1 1 1.855-1.857zM37.688 64.563a1.312 1.312 0 1 1 2.624 0v6.124a1.312 1.312 0 1 1-2.624 0zM28.482 59.662a1.312 1.312 0 1 1 1.856 1.856l-4.331 4.331a1.312 1.312 0 1 1-1.856-1.856zM25.438 49.688a1.312 1.312 0 1 1 0 2.624h-6.125a1.312 1.312 0 1 1 0-2.624zM30.338 40.482a1.312 1.312 0 1 1-1.856 1.856l-4.331-4.331a1.312 1.312 0 1 1 1.856-1.856z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  dur="6s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 39.0 51.0;360 39.0 51.0"
                />
              </g>
            </g>
            <g id="overcast-day-rain__Clouds">
              <g id="overcast-day-rain__Secondary Cloud">
                <path
                  id="overcast-day-rain__Cloud"
                  fill="url(#overcast-day-rain__paint1_linear_1858_8378)"
                  stroke="#94a3b8"
                  stroke-miterlimit="10"
                  d="M83.84 48.693c2.404-3.735 7.375-5.164 11.478-3.516 4.043 1.624 6.496 6.012 5.392 10.26l-.17.653.675-.029c3.281-.137 6.285 2.404 6.285 5.713 0 3.202-2.831 5.726-6.011 5.726H74.977c-3.21 0-6.132-2.382-6.448-5.593-.315-3.2 2.088-6.066 5.235-6.636l.491-.09-.088-.49c-.394-2.198.645-4.442 2.518-5.664 1.925-1.256 4.492-1.32 6.483-.17l.413.237z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="3s"
                  keySplines=".42 0 .58 1; .42 0 .58 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 -3;0 0;0 -3"
                />
              </g>
              <g id="overcast-day-rain__Cloud_2">
                <path
                  id="overcast-day-rain__Cloud_3"
                  fill="url(#overcast-day-rain__paint2_linear_1858_8378)"
                  stroke="#e6effc"
                  stroke-miterlimit="10"
                  d="M55.262 48.475c4.86-7.864 15.035-11.095 23.553-7.532 8.506 3.56 13.323 13.06 11.088 22.022l-.161.65.669-.03c7.01-.306 13.089 5.407 13.089 12.443 0 6.811-5.728 12.472-12.523 12.472H37.954c-6.826.002-12.751-5.33-13.395-12.14-.643-6.808 4.178-13.148 10.884-14.415l.483-.092-.084-.484c-.816-4.745 1.284-9.652 5.263-12.356 3.99-2.712 9.34-2.86 13.475-.373l.423.255z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="3s"
                  keySplines=".42 0 .58 1; .42 0 .58 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 -3;0 0"
                />
              </g>
            </g>
          </g>
          <g id="overcast-day-rain__Precipitation">
            <g id="overcast-day-rain__Raindrops">
              <path
                id="overcast-day-rain__Raindrop 1"
                stroke="#0a5ad4"
                stroke-linecap="round"
                stroke-width="4"
                d="M52 83v12"
              >
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="0s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
              <path
                id="overcast-day-rain__Raindrop 2"
                stroke="#0a5ad4"
                stroke-linecap="round"
                stroke-width="4"
                d="M64 83v12"
              >
                <animateTransform
                  attributeName="transform"
                  begin="-0.6s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="-0.6s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
              <path
                id="overcast-day-rain__Raindrop 3"
                stroke="#0a5ad4"
                stroke-linecap="round"
                stroke-width="4"
                d="M76 83v12"
              >
                <animateTransform
                  attributeName="transform"
                  begin="-0.19999999999999996s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="-0.19999999999999996s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            id="overcast-day-rain__paint0_linear_1858_8378"
            x1="39"
            x2="39"
            y1="42"
            y2="60"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#fbbf24" />
            <stop offset="1" stop-color="#f8af18" />
          </linearGradient>
          <linearGradient
            id="overcast-day-rain__paint1_linear_1858_8378"
            x1="88"
            x2="88"
            y1="44"
            y2="68"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#b0bccd" />
            <stop offset="1" stop-color="#94a3b8" />
          </linearGradient>
          <linearGradient
            id="overcast-day-rain__paint2_linear_1858_8378"
            x1="64.001"
            x2="64.001"
            y1="39"
            y2="89"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#f3f7fe" />
            <stop offset="1" stop-color="#e6effc" />
          </linearGradient>
          <clipPath id="overcast-day-rain__clip0_1858_8378">
            <rect width="128" height="128" fill="#fff" />
          </clipPath>
        </defs>
      </svg>
    ),
    nightIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128">
        <g
          id="overcast-night-rain__overcast-night-rain"
          clip-path="url(#overcast-night-rain__clip0_1858_8380)"
        >
          <g id="overcast-night-rain__Sky">
            <g id="overcast-night-rain__Moon">
              <path
                id="overcast-night-rain__Moon_2"
                fill="url(#overcast-night-rain__paint0_linear_1858_8380)"
                stroke="#72b9d5"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M35.115 34.595c-1.737 8.568 5.638 16.62 14.198 16.188-1.64 5.05-6.424 8.717-12.095 8.717-7.03 0-12.718-5.621-12.718-12.541 0-6.214 4.588-11.375 10.615-12.364"
              />
              <animateTransform
                attributeName="transform"
                begin="0s"
                calcMode="spline"
                dur="3s"
                keySplines=".42 0 .58 1; .42 0 .58 1"
                repeatCount="indefinite"
                type="rotate"
                values="-6 36.9 47.0;6 36.9 47.0;-6 36.9 47.0"
              />
            </g>
            <g id="overcast-night-rain__Clouds">
              <g id="overcast-night-rain__Secondary Cloud">
                <path
                  id="overcast-night-rain__Cloud"
                  fill="url(#overcast-night-rain__paint1_linear_1858_8380)"
                  stroke="#94a3b8"
                  stroke-miterlimit="10"
                  d="M83.84 48.693c2.404-3.735 7.375-5.164 11.478-3.516 4.043 1.624 6.496 6.012 5.392 10.26l-.17.653.675-.029c3.281-.137 6.285 2.404 6.285 5.713 0 3.202-2.831 5.726-6.011 5.726H74.977c-3.21 0-6.132-2.382-6.448-5.593-.315-3.2 2.088-6.066 5.235-6.636l.491-.09-.088-.49c-.394-2.198.645-4.442 2.518-5.664 1.925-1.256 4.492-1.32 6.483-.17l.413.237z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="3s"
                  keySplines=".42 0 .58 1; .42 0 .58 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 -3;0 0;0 -3"
                />
              </g>
              <g id="overcast-night-rain__Cloud_2">
                <path
                  id="overcast-night-rain__Cloud_3"
                  fill="url(#overcast-night-rain__paint2_linear_1858_8380)"
                  stroke="#e6effc"
                  stroke-miterlimit="10"
                  d="M55.262 48.475c4.86-7.864 15.035-11.095 23.553-7.532 8.506 3.56 13.323 13.06 11.088 22.022l-.161.65.669-.03c7.01-.306 13.089 5.407 13.089 12.443 0 6.811-5.728 12.472-12.523 12.472H37.954c-6.826.002-12.751-5.33-13.395-12.14-.643-6.808 4.178-13.148 10.884-14.415l.483-.092-.084-.484c-.816-4.745 1.284-9.652 5.263-12.356 3.99-2.712 9.34-2.86 13.475-.373l.423.255z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="3s"
                  keySplines=".42 0 .58 1; .42 0 .58 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 -3;0 0"
                />
              </g>
            </g>
          </g>
          <g id="overcast-night-rain__Precipitation">
            <g id="overcast-night-rain__Raindrops">
              <path
                id="overcast-night-rain__Raindrop 1"
                stroke="#0a5ad4"
                stroke-linecap="round"
                stroke-width="4"
                d="M52 83v12"
              >
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="0s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
              <path
                id="overcast-night-rain__Raindrop 2"
                stroke="#0a5ad4"
                stroke-linecap="round"
                stroke-width="4"
                d="M64 83v12"
              >
                <animateTransform
                  attributeName="transform"
                  begin="-0.6s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="-0.6s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
              <path
                id="overcast-night-rain__Raindrop 3"
                stroke="#0a5ad4"
                stroke-linecap="round"
                stroke-width="4"
                d="M76 83v12"
              >
                <animateTransform
                  attributeName="transform"
                  begin="-0.19999999999999996s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="-0.19999999999999996s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            id="overcast-night-rain__paint0_linear_1858_8380"
            x1="37"
            x2="37"
            y1="34"
            y2="60"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#86c3db" />
            <stop offset="1" stop-color="#72b9d5" />
          </linearGradient>
          <linearGradient
            id="overcast-night-rain__paint1_linear_1858_8380"
            x1="88"
            x2="88"
            y1="44"
            y2="68"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#b0bccd" />
            <stop offset="1" stop-color="#94a3b8" />
          </linearGradient>
          <linearGradient
            id="overcast-night-rain__paint2_linear_1858_8380"
            x1="64.001"
            x2="64.001"
            y1="39"
            y2="89"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#f3f7fe" />
            <stop offset="1" stop-color="#e6effc" />
          </linearGradient>
          <clipPath id="overcast-night-rain__clip0_1858_8380">
            <rect width="128" height="128" fill="#fff" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    code: [66, 67],
    description: "Freezing Rain",
    dayIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128">
        <g
          id="overcast-night-rain__overcast-night-rain"
          clip-path="url(#overcast-night-rain__clip0_1858_8380)"
        >
          <g id="overcast-night-rain__Sky">
            <g id="overcast-night-rain__Moon">
              <path
                id="overcast-night-rain__Moon_2"
                fill="url(#overcast-night-rain__paint0_linear_1858_8380)"
                stroke="#72b9d5"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M35.115 34.595c-1.737 8.568 5.638 16.62 14.198 16.188-1.64 5.05-6.424 8.717-12.095 8.717-7.03 0-12.718-5.621-12.718-12.541 0-6.214 4.588-11.375 10.615-12.364"
              />
              <animateTransform
                attributeName="transform"
                begin="0s"
                calcMode="spline"
                dur="3s"
                keySplines=".42 0 .58 1; .42 0 .58 1"
                repeatCount="indefinite"
                type="rotate"
                values="-6 36.9 47.0;6 36.9 47.0;-6 36.9 47.0"
              />
            </g>
            <g id="overcast-night-rain__Clouds">
              <g id="overcast-night-rain__Secondary Cloud">
                <path
                  id="overcast-night-rain__Cloud"
                  fill="url(#overcast-night-rain__paint1_linear_1858_8380)"
                  stroke="#94a3b8"
                  stroke-miterlimit="10"
                  d="M83.84 48.693c2.404-3.735 7.375-5.164 11.478-3.516 4.043 1.624 6.496 6.012 5.392 10.26l-.17.653.675-.029c3.281-.137 6.285 2.404 6.285 5.713 0 3.202-2.831 5.726-6.011 5.726H74.977c-3.21 0-6.132-2.382-6.448-5.593-.315-3.2 2.088-6.066 5.235-6.636l.491-.09-.088-.49c-.394-2.198.645-4.442 2.518-5.664 1.925-1.256 4.492-1.32 6.483-.17l.413.237z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="3s"
                  keySplines=".42 0 .58 1; .42 0 .58 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 -3;0 0;0 -3"
                />
              </g>
              <g id="overcast-night-rain__Cloud_2">
                <path
                  id="overcast-night-rain__Cloud_3"
                  fill="url(#overcast-night-rain__paint2_linear_1858_8380)"
                  stroke="#e6effc"
                  stroke-miterlimit="10"
                  d="M55.262 48.475c4.86-7.864 15.035-11.095 23.553-7.532 8.506 3.56 13.323 13.06 11.088 22.022l-.161.65.669-.03c7.01-.306 13.089 5.407 13.089 12.443 0 6.811-5.728 12.472-12.523 12.472H37.954c-6.826.002-12.751-5.33-13.395-12.14-.643-6.808 4.178-13.148 10.884-14.415l.483-.092-.084-.484c-.816-4.745 1.284-9.652 5.263-12.356 3.99-2.712 9.34-2.86 13.475-.373l.423.255z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="3s"
                  keySplines=".42 0 .58 1; .42 0 .58 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 -3;0 0"
                />
              </g>
            </g>
          </g>
          <g id="overcast-night-rain__Precipitation">
            <g id="overcast-night-rain__Raindrops">
              <path
                id="overcast-night-rain__Raindrop 1"
                stroke="#0a5ad4"
                stroke-linecap="round"
                stroke-width="4"
                d="M52 83v12"
              >
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="0s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
              <path
                id="overcast-night-rain__Raindrop 2"
                stroke="#0a5ad4"
                stroke-linecap="round"
                stroke-width="4"
                d="M64 83v12"
              >
                <animateTransform
                  attributeName="transform"
                  begin="-0.6s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="-0.6s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
              <path
                id="overcast-night-rain__Raindrop 3"
                stroke="#0a5ad4"
                stroke-linecap="round"
                stroke-width="4"
                d="M76 83v12"
              >
                <animateTransform
                  attributeName="transform"
                  begin="-0.19999999999999996s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="-0.19999999999999996s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            id="overcast-night-rain__paint0_linear_1858_8380"
            x1="37"
            x2="37"
            y1="34"
            y2="60"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#86c3db" />
            <stop offset="1" stop-color="#72b9d5" />
          </linearGradient>
          <linearGradient
            id="overcast-night-rain__paint1_linear_1858_8380"
            x1="88"
            x2="88"
            y1="44"
            y2="68"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#b0bccd" />
            <stop offset="1" stop-color="#94a3b8" />
          </linearGradient>
          <linearGradient
            id="overcast-night-rain__paint2_linear_1858_8380"
            x1="64.001"
            x2="64.001"
            y1="39"
            y2="89"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#f3f7fe" />
            <stop offset="1" stop-color="#e6effc" />
          </linearGradient>
          <clipPath id="overcast-night-rain__clip0_1858_8380">
            <rect width="128" height="128" fill="#fff" />
          </clipPath>
        </defs>
      </svg>
    ),
    nightIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128">
        <g
          id="extreme-rain__extreme-rain"
          clip-path="url(#extreme-rain__clip0_1858_8382)"
        >
          <g id="extreme-rain__Sky">
            <g id="extreme-rain__Clouds">
              <g id="extreme-rain__Secondary Cloud">
                <path
                  id="extreme-rain__Cloud"
                  fill="url(#extreme-rain__paint0_linear_1858_8382)"
                  stroke="#94a3b8"
                  stroke-miterlimit="10"
                  d="M83.84 48.693c2.404-3.735 7.375-5.164 11.478-3.516 4.043 1.624 6.496 6.012 5.392 10.26l-.17.653.675-.029c3.281-.137 6.285 2.404 6.285 5.713 0 3.202-2.831 5.726-6.011 5.726H74.977c-3.21 0-6.132-2.382-6.448-5.593-.315-3.2 2.088-6.066 5.235-6.636l.491-.09-.088-.49c-.394-2.198.645-4.442 2.518-5.664 1.925-1.256 4.492-1.32 6.483-.17l.413.237z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="3s"
                  keySplines=".42 0 .58 1; .42 0 .58 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 -3;0 0;0 -3"
                />
              </g>
              <g id="extreme-rain__Cloud_2">
                <path
                  id="extreme-rain__Cloud_3"
                  fill="url(#extreme-rain__paint1_linear_1858_8382)"
                  stroke="#64748b"
                  stroke-miterlimit="10"
                  d="M55.262 48.475c4.86-7.864 15.035-11.095 23.553-7.532 8.506 3.56 13.323 13.06 11.088 22.022l-.161.65.669-.03c7.01-.306 13.089 5.407 13.089 12.443 0 6.811-5.728 12.472-12.523 12.472H37.954c-6.826.002-12.751-5.33-13.395-12.14-.643-6.808 4.178-13.148 10.884-14.415l.483-.092-.084-.484c-.816-4.745 1.284-9.652 5.263-12.356 3.99-2.712 9.34-2.86 13.475-.373l.423.255z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="3s"
                  keySplines=".42 0 .58 1; .42 0 .58 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 -3;0 0"
                />
              </g>
            </g>
          </g>
          <g id="extreme-rain__Precipitation">
            <g id="extreme-rain__Raindrops">
              <path
                id="extreme-rain__Raindrop 1"
                stroke="#0a5ad4"
                stroke-linecap="round"
                stroke-width="4"
                d="M52 83v12"
              >
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="0s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
              <path
                id="extreme-rain__Raindrop 2"
                stroke="#0a5ad4"
                stroke-linecap="round"
                stroke-width="4"
                d="M64 83v12"
              >
                <animateTransform
                  attributeName="transform"
                  begin="-0.6s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="-0.6s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
              <path
                id="extreme-rain__Raindrop 3"
                stroke="#0a5ad4"
                stroke-linecap="round"
                stroke-width="4"
                d="M76 83v12"
              >
                <animateTransform
                  attributeName="transform"
                  begin="-0.19999999999999996s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="-0.19999999999999996s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            id="extreme-rain__paint0_linear_1858_8382"
            x1="88"
            x2="88"
            y1="44"
            y2="68"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#b0bccd" />
            <stop offset="1" stop-color="#94a3b8" />
          </linearGradient>
          <linearGradient
            id="extreme-rain__paint1_linear_1858_8382"
            x1="64.001"
            x2="64.001"
            y1="39"
            y2="89"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#7c8ca2" />
            <stop offset="1" stop-color="#64748b" />
          </linearGradient>
          <clipPath id="extreme-rain__clip0_1858_8382">
            <rect width="128" height="128" fill="#fff" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    code: [71, 73, 75, 77],
    description: "Snow fall",
    dayIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128">
        <g
          id="overcast-day-snow__overcast-day-snow"
          clip-path="url(#overcast-day-snow__clip0_1858_8872)"
        >
          <g id="overcast-day-snow__Sky">
            <g id="overcast-day-snow__Sun">
              <circle
                id="overcast-day-snow__Core"
                cx="39"
                cy="51"
                r="8.5"
                fill="url(#overcast-day-snow__paint0_linear_1858_8872)"
                stroke="#f8af18"
              />
              <g id="overcast-day-snow__Rays">
                <path
                  fill="#f8af18"
                  d="M37.688 31.313a1.312 1.312 0 1 1 2.624 0v6.125a1.312 1.312 0 1 1-2.624 0zM51.993 36.15a1.312 1.312 0 1 1 1.856 1.857l-4.33 4.33a1.312 1.312 0 1 1-1.857-1.855zM58.688 49.688a1.312 1.312 0 1 1 0 2.624h-6.126a1.312 1.312 0 1 1 0-2.624zM53.85 63.993a1.312 1.312 0 1 1-1.857 1.856l-4.33-4.33a1.312 1.312 0 1 1 1.855-1.857zM37.688 64.563a1.312 1.312 0 1 1 2.624 0v6.124a1.312 1.312 0 1 1-2.624 0zM28.482 59.662a1.312 1.312 0 1 1 1.856 1.856l-4.331 4.331a1.312 1.312 0 1 1-1.856-1.856zM25.438 49.688a1.312 1.312 0 1 1 0 2.624h-6.125a1.312 1.312 0 1 1 0-2.624zM30.338 40.482a1.312 1.312 0 1 1-1.856 1.856l-4.331-4.331a1.312 1.312 0 1 1 1.856-1.856z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  dur="6s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 39.0 51.0;360 39.0 51.0"
                />
              </g>
            </g>
            <g id="overcast-day-snow__Clouds">
              <g id="overcast-day-snow__Secondary Cloud">
                <path
                  id="overcast-day-snow__Cloud"
                  fill="url(#overcast-day-snow__paint1_linear_1858_8872)"
                  stroke="#94a3b8"
                  stroke-miterlimit="10"
                  d="M83.84 48.693c2.404-3.735 7.375-5.164 11.478-3.516 4.043 1.624 6.496 6.012 5.392 10.26l-.17.653.675-.029c3.281-.137 6.285 2.404 6.285 5.713 0 3.202-2.831 5.726-6.011 5.726H74.977c-3.21 0-6.132-2.382-6.448-5.593-.315-3.2 2.088-6.066 5.235-6.636l.491-.09-.088-.49c-.394-2.198.645-4.442 2.518-5.664 1.925-1.256 4.492-1.32 6.483-.17l.413.237z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="3s"
                  keySplines=".42 0 .58 1; .42 0 .58 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 -3;0 0;0 -3"
                />
              </g>
              <g id="overcast-day-snow__Cloud_2">
                <path
                  id="overcast-day-snow__Cloud_3"
                  fill="url(#overcast-day-snow__paint2_linear_1858_8872)"
                  stroke="#e6effc"
                  stroke-miterlimit="10"
                  d="M55.262 48.475c4.86-7.864 15.035-11.095 23.553-7.532 8.506 3.56 13.323 13.06 11.088 22.022l-.161.65.669-.03c7.01-.306 13.089 5.407 13.089 12.443 0 6.811-5.728 12.472-12.523 12.472H37.954c-6.826.002-12.751-5.33-13.395-12.14-.643-6.808 4.178-13.148 10.884-14.415l.483-.092-.084-.484c-.816-4.745 1.284-9.652 5.263-12.356 3.99-2.712 9.34-2.86 13.475-.373l.423.255z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="3s"
                  keySplines=".42 0 .58 1; .42 0 .58 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 -3;0 0"
                />
              </g>
            </g>
          </g>
          <g id="overcast-day-snow__Precipitation">
            <g id="overcast-day-snow__Snowflakes">
              <path
                id="overcast-day-snow__Snowflake 1"
                fill="#86c3db"
                d="m52.578 90.366-1.205-.689a2.9 2.9 0 0 0-.002-1.353l1.207-.69a.83.83 0 0 0 .309-1.141.85.85 0 0 0-1.153-.306l-1.206.69a2.9 2.9 0 0 0-1.184-.677v-1.38A.85.85 0 0 0 48.5 84a.843.843 0 0 0-.844.82v1.38a2.96 2.96 0 0 0-1.185.674l-1.205-.689a.848.848 0 0 0-1.259.616.83.83 0 0 0 .415.832l1.204.689c-.106.445-.105.909.003 1.353l-1.207.69a.83.83 0 0 0-.415.832.83.83 0 0 0 .62.7.85.85 0 0 0 .64-.084l1.205-.69c.334.318.74.55 1.184.675v1.382a.85.85 0 0 0 .844.82.843.843 0 0 0 .844-.82v-1.383c.441-.129.847-.36 1.184-.673l1.206.69a.847.847 0 0 0 1.259-.616.83.83 0 0 0-.415-.832m-4.712-.28a1.24 1.24 0 0 1-.622-1.25 1.25 1.25 0 0 1 .93-1.048 1.27 1.27 0 0 1 1.329.445 1.25 1.25 0 0 1 .093 1.393 1.28 1.28 0 0 1-1.73.46"
              >
                <animateTransform
                  attributeName="transform"
                  begin="-0.8s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="-0.8s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
              <path
                id="overcast-day-snow__Snowflake 2"
                fill="#86c3db"
                d="m67.578 90.366-1.204-.689a2.9 2.9 0 0 0-.003-1.353l1.207-.69a.83.83 0 0 0 .309-1.141.85.85 0 0 0-1.153-.306l-1.206.69a2.9 2.9 0 0 0-1.184-.677v-1.38A.85.85 0 0 0 63.5 84a.843.843 0 0 0-.844.82v1.38a2.96 2.96 0 0 0-1.185.674l-1.205-.689a.848.848 0 0 0-1.259.616.83.83 0 0 0 .415.832l1.204.689c-.106.445-.105.909.003 1.353l-1.207.69a.83.83 0 0 0-.415.832.83.83 0 0 0 .62.7.85.85 0 0 0 .64-.084l1.205-.69c.334.318.74.55 1.184.675v1.382a.85.85 0 0 0 .844.82.843.843 0 0 0 .844-.82v-1.383c.441-.129.847-.36 1.184-.673l1.206.69a.847.847 0 0 0 1.259-.616.83.83 0 0 0-.415-.832m-4.712-.28a1.24 1.24 0 0 1-.622-1.25 1.25 1.25 0 0 1 .93-1.048 1.27 1.27 0 0 1 1.329.445 1.25 1.25 0 0 1 .093 1.393 1.28 1.28 0 0 1-1.73.46"
              >
                <animateTransform
                  attributeName="transform"
                  begin="-0.30000000000000004s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="-0.30000000000000004s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
              <path
                id="overcast-day-snow__Snowflake 3"
                fill="#86c3db"
                d="m82.578 90.366-1.204-.689a2.9 2.9 0 0 0-.003-1.353l1.207-.69a.83.83 0 0 0 .309-1.141.85.85 0 0 0-1.153-.306l-1.206.69a2.9 2.9 0 0 0-1.184-.677v-1.38A.85.85 0 0 0 78.5 84a.843.843 0 0 0-.844.82v1.38a2.96 2.96 0 0 0-1.185.674l-1.205-.689a.848.848 0 0 0-1.259.616.83.83 0 0 0 .415.832l1.204.689c-.106.445-.105.909.003 1.353l-1.207.69a.83.83 0 0 0-.415.832.83.83 0 0 0 .62.7.85.85 0 0 0 .64-.084l1.205-.69c.334.318.74.55 1.184.675v1.382a.85.85 0 0 0 .844.82.843.843 0 0 0 .844-.82v-1.383c.441-.129.847-.36 1.184-.673l1.206.69a.847.847 0 0 0 1.259-.616.83.83 0 0 0-.415-.832m-4.712-.28a1.24 1.24 0 0 1-.622-1.25 1.25 1.25 0 0 1 .93-1.048 1.27 1.27 0 0 1 1.329.445 1.25 1.25 0 0 1 .093 1.393 1.28 1.28 0 0 1-1.73.46"
              >
                <animateTransform
                  attributeName="transform"
                  begin="-0.8s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="-0.8s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            id="overcast-day-snow__paint0_linear_1858_8872"
            x1="39"
            x2="39"
            y1="42"
            y2="60"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#fbbf24" />
            <stop offset="1" stop-color="#f8af18" />
          </linearGradient>
          <linearGradient
            id="overcast-day-snow__paint1_linear_1858_8872"
            x1="88"
            x2="88"
            y1="44"
            y2="68"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#b0bccd" />
            <stop offset="1" stop-color="#94a3b8" />
          </linearGradient>
          <linearGradient
            id="overcast-day-snow__paint2_linear_1858_8872"
            x1="64.001"
            x2="64.001"
            y1="39"
            y2="89"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#f3f7fe" />
            <stop offset="1" stop-color="#e6effc" />
          </linearGradient>
          <clipPath id="overcast-day-snow__clip0_1858_8872">
            <rect width="128" height="128" fill="#fff" />
          </clipPath>
        </defs>
      </svg>
    ),
    nightIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128">
        <g
          id="overcast-day-snow__overcast-day-snow"
          clip-path="url(#overcast-day-snow__clip0_1858_8872)"
        >
          <g id="overcast-day-snow__Sky">
            <g id="overcast-day-snow__Sun">
              <circle
                id="overcast-day-snow__Core"
                cx="39"
                cy="51"
                r="8.5"
                fill="url(#overcast-day-snow__paint0_linear_1858_8872)"
                stroke="#f8af18"
              />
              <g id="overcast-day-snow__Rays">
                <path
                  fill="#f8af18"
                  d="M37.688 31.313a1.312 1.312 0 1 1 2.624 0v6.125a1.312 1.312 0 1 1-2.624 0zM51.993 36.15a1.312 1.312 0 1 1 1.856 1.857l-4.33 4.33a1.312 1.312 0 1 1-1.857-1.855zM58.688 49.688a1.312 1.312 0 1 1 0 2.624h-6.126a1.312 1.312 0 1 1 0-2.624zM53.85 63.993a1.312 1.312 0 1 1-1.857 1.856l-4.33-4.33a1.312 1.312 0 1 1 1.855-1.857zM37.688 64.563a1.312 1.312 0 1 1 2.624 0v6.124a1.312 1.312 0 1 1-2.624 0zM28.482 59.662a1.312 1.312 0 1 1 1.856 1.856l-4.331 4.331a1.312 1.312 0 1 1-1.856-1.856zM25.438 49.688a1.312 1.312 0 1 1 0 2.624h-6.125a1.312 1.312 0 1 1 0-2.624zM30.338 40.482a1.312 1.312 0 1 1-1.856 1.856l-4.331-4.331a1.312 1.312 0 1 1 1.856-1.856z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  dur="6s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 39.0 51.0;360 39.0 51.0"
                />
              </g>
            </g>
            <g id="overcast-day-snow__Clouds">
              <g id="overcast-day-snow__Secondary Cloud">
                <path
                  id="overcast-day-snow__Cloud"
                  fill="url(#overcast-day-snow__paint1_linear_1858_8872)"
                  stroke="#94a3b8"
                  stroke-miterlimit="10"
                  d="M83.84 48.693c2.404-3.735 7.375-5.164 11.478-3.516 4.043 1.624 6.496 6.012 5.392 10.26l-.17.653.675-.029c3.281-.137 6.285 2.404 6.285 5.713 0 3.202-2.831 5.726-6.011 5.726H74.977c-3.21 0-6.132-2.382-6.448-5.593-.315-3.2 2.088-6.066 5.235-6.636l.491-.09-.088-.49c-.394-2.198.645-4.442 2.518-5.664 1.925-1.256 4.492-1.32 6.483-.17l.413.237z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="3s"
                  keySplines=".42 0 .58 1; .42 0 .58 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 -3;0 0;0 -3"
                />
              </g>
              <g id="overcast-day-snow__Cloud_2">
                <path
                  id="overcast-day-snow__Cloud_3"
                  fill="url(#overcast-day-snow__paint2_linear_1858_8872)"
                  stroke="#e6effc"
                  stroke-miterlimit="10"
                  d="M55.262 48.475c4.86-7.864 15.035-11.095 23.553-7.532 8.506 3.56 13.323 13.06 11.088 22.022l-.161.65.669-.03c7.01-.306 13.089 5.407 13.089 12.443 0 6.811-5.728 12.472-12.523 12.472H37.954c-6.826.002-12.751-5.33-13.395-12.14-.643-6.808 4.178-13.148 10.884-14.415l.483-.092-.084-.484c-.816-4.745 1.284-9.652 5.263-12.356 3.99-2.712 9.34-2.86 13.475-.373l.423.255z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="3s"
                  keySplines=".42 0 .58 1; .42 0 .58 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 -3;0 0"
                />
              </g>
            </g>
          </g>
          <g id="overcast-day-snow__Precipitation">
            <g id="overcast-day-snow__Snowflakes">
              <path
                id="overcast-day-snow__Snowflake 1"
                fill="#86c3db"
                d="m52.578 90.366-1.205-.689a2.9 2.9 0 0 0-.002-1.353l1.207-.69a.83.83 0 0 0 .309-1.141.85.85 0 0 0-1.153-.306l-1.206.69a2.9 2.9 0 0 0-1.184-.677v-1.38A.85.85 0 0 0 48.5 84a.843.843 0 0 0-.844.82v1.38a2.96 2.96 0 0 0-1.185.674l-1.205-.689a.848.848 0 0 0-1.259.616.83.83 0 0 0 .415.832l1.204.689c-.106.445-.105.909.003 1.353l-1.207.69a.83.83 0 0 0-.415.832.83.83 0 0 0 .62.7.85.85 0 0 0 .64-.084l1.205-.69c.334.318.74.55 1.184.675v1.382a.85.85 0 0 0 .844.82.843.843 0 0 0 .844-.82v-1.383c.441-.129.847-.36 1.184-.673l1.206.69a.847.847 0 0 0 1.259-.616.83.83 0 0 0-.415-.832m-4.712-.28a1.24 1.24 0 0 1-.622-1.25 1.25 1.25 0 0 1 .93-1.048 1.27 1.27 0 0 1 1.329.445 1.25 1.25 0 0 1 .093 1.393 1.28 1.28 0 0 1-1.73.46"
              >
                <animateTransform
                  attributeName="transform"
                  begin="-0.8s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="-0.8s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
              <path
                id="overcast-day-snow__Snowflake 2"
                fill="#86c3db"
                d="m67.578 90.366-1.204-.689a2.9 2.9 0 0 0-.003-1.353l1.207-.69a.83.83 0 0 0 .309-1.141.85.85 0 0 0-1.153-.306l-1.206.69a2.9 2.9 0 0 0-1.184-.677v-1.38A.85.85 0 0 0 63.5 84a.843.843 0 0 0-.844.82v1.38a2.96 2.96 0 0 0-1.185.674l-1.205-.689a.848.848 0 0 0-1.259.616.83.83 0 0 0 .415.832l1.204.689c-.106.445-.105.909.003 1.353l-1.207.69a.83.83 0 0 0-.415.832.83.83 0 0 0 .62.7.85.85 0 0 0 .64-.084l1.205-.69c.334.318.74.55 1.184.675v1.382a.85.85 0 0 0 .844.82.843.843 0 0 0 .844-.82v-1.383c.441-.129.847-.36 1.184-.673l1.206.69a.847.847 0 0 0 1.259-.616.83.83 0 0 0-.415-.832m-4.712-.28a1.24 1.24 0 0 1-.622-1.25 1.25 1.25 0 0 1 .93-1.048 1.27 1.27 0 0 1 1.329.445 1.25 1.25 0 0 1 .093 1.393 1.28 1.28 0 0 1-1.73.46"
              >
                <animateTransform
                  attributeName="transform"
                  begin="-0.30000000000000004s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="-0.30000000000000004s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
              <path
                id="overcast-day-snow__Snowflake 3"
                fill="#86c3db"
                d="m82.578 90.366-1.204-.689a2.9 2.9 0 0 0-.003-1.353l1.207-.69a.83.83 0 0 0 .309-1.141.85.85 0 0 0-1.153-.306l-1.206.69a2.9 2.9 0 0 0-1.184-.677v-1.38A.85.85 0 0 0 78.5 84a.843.843 0 0 0-.844.82v1.38a2.96 2.96 0 0 0-1.185.674l-1.205-.689a.848.848 0 0 0-1.259.616.83.83 0 0 0 .415.832l1.204.689c-.106.445-.105.909.003 1.353l-1.207.69a.83.83 0 0 0-.415.832.83.83 0 0 0 .62.7.85.85 0 0 0 .64-.084l1.205-.69c.334.318.74.55 1.184.675v1.382a.85.85 0 0 0 .844.82.843.843 0 0 0 .844-.82v-1.383c.441-.129.847-.36 1.184-.673l1.206.69a.847.847 0 0 0 1.259-.616.83.83 0 0 0-.415-.832m-4.712-.28a1.24 1.24 0 0 1-.622-1.25 1.25 1.25 0 0 1 .93-1.048 1.27 1.27 0 0 1 1.329.445 1.25 1.25 0 0 1 .093 1.393 1.28 1.28 0 0 1-1.73.46"
              >
                <animateTransform
                  attributeName="transform"
                  begin="-0.8s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="-0.8s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            id="overcast-day-snow__paint0_linear_1858_8872"
            x1="39"
            x2="39"
            y1="42"
            y2="60"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#fbbf24" />
            <stop offset="1" stop-color="#f8af18" />
          </linearGradient>
          <linearGradient
            id="overcast-day-snow__paint1_linear_1858_8872"
            x1="88"
            x2="88"
            y1="44"
            y2="68"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#b0bccd" />
            <stop offset="1" stop-color="#94a3b8" />
          </linearGradient>
          <linearGradient
            id="overcast-day-snow__paint2_linear_1858_8872"
            x1="64.001"
            x2="64.001"
            y1="39"
            y2="89"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#f3f7fe" />
            <stop offset="1" stop-color="#e6effc" />
          </linearGradient>
          <clipPath id="overcast-day-snow__clip0_1858_8872">
            <rect width="128" height="128" fill="#fff" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    code: [80, 81, 82],
    description: "Rain showers",
    dayIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128">
        <g
          id="overcast-day-snow__overcast-day-snow"
          clip-path="url(#overcast-day-snow__clip0_1858_8872)"
        >
          <g id="overcast-day-snow__Sky">
            <g id="overcast-day-snow__Sun">
              <circle
                id="overcast-day-snow__Core"
                cx="39"
                cy="51"
                r="8.5"
                fill="url(#overcast-day-snow__paint0_linear_1858_8872)"
                stroke="#f8af18"
              />
              <g id="overcast-day-snow__Rays">
                <path
                  fill="#f8af18"
                  d="M37.688 31.313a1.312 1.312 0 1 1 2.624 0v6.125a1.312 1.312 0 1 1-2.624 0zM51.993 36.15a1.312 1.312 0 1 1 1.856 1.857l-4.33 4.33a1.312 1.312 0 1 1-1.857-1.855zM58.688 49.688a1.312 1.312 0 1 1 0 2.624h-6.126a1.312 1.312 0 1 1 0-2.624zM53.85 63.993a1.312 1.312 0 1 1-1.857 1.856l-4.33-4.33a1.312 1.312 0 1 1 1.855-1.857zM37.688 64.563a1.312 1.312 0 1 1 2.624 0v6.124a1.312 1.312 0 1 1-2.624 0zM28.482 59.662a1.312 1.312 0 1 1 1.856 1.856l-4.331 4.331a1.312 1.312 0 1 1-1.856-1.856zM25.438 49.688a1.312 1.312 0 1 1 0 2.624h-6.125a1.312 1.312 0 1 1 0-2.624zM30.338 40.482a1.312 1.312 0 1 1-1.856 1.856l-4.331-4.331a1.312 1.312 0 1 1 1.856-1.856z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  dur="6s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 39.0 51.0;360 39.0 51.0"
                />
              </g>
            </g>
            <g id="overcast-day-snow__Clouds">
              <g id="overcast-day-snow__Secondary Cloud">
                <path
                  id="overcast-day-snow__Cloud"
                  fill="url(#overcast-day-snow__paint1_linear_1858_8872)"
                  stroke="#94a3b8"
                  stroke-miterlimit="10"
                  d="M83.84 48.693c2.404-3.735 7.375-5.164 11.478-3.516 4.043 1.624 6.496 6.012 5.392 10.26l-.17.653.675-.029c3.281-.137 6.285 2.404 6.285 5.713 0 3.202-2.831 5.726-6.011 5.726H74.977c-3.21 0-6.132-2.382-6.448-5.593-.315-3.2 2.088-6.066 5.235-6.636l.491-.09-.088-.49c-.394-2.198.645-4.442 2.518-5.664 1.925-1.256 4.492-1.32 6.483-.17l.413.237z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="3s"
                  keySplines=".42 0 .58 1; .42 0 .58 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 -3;0 0;0 -3"
                />
              </g>
              <g id="overcast-day-snow__Cloud_2">
                <path
                  id="overcast-day-snow__Cloud_3"
                  fill="url(#overcast-day-snow__paint2_linear_1858_8872)"
                  stroke="#e6effc"
                  stroke-miterlimit="10"
                  d="M55.262 48.475c4.86-7.864 15.035-11.095 23.553-7.532 8.506 3.56 13.323 13.06 11.088 22.022l-.161.65.669-.03c7.01-.306 13.089 5.407 13.089 12.443 0 6.811-5.728 12.472-12.523 12.472H37.954c-6.826.002-12.751-5.33-13.395-12.14-.643-6.808 4.178-13.148 10.884-14.415l.483-.092-.084-.484c-.816-4.745 1.284-9.652 5.263-12.356 3.99-2.712 9.34-2.86 13.475-.373l.423.255z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="3s"
                  keySplines=".42 0 .58 1; .42 0 .58 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 -3;0 0"
                />
              </g>
            </g>
          </g>
          <g id="overcast-day-snow__Precipitation">
            <g id="overcast-day-snow__Snowflakes">
              <path
                id="overcast-day-snow__Snowflake 1"
                fill="#86c3db"
                d="m52.578 90.366-1.205-.689a2.9 2.9 0 0 0-.002-1.353l1.207-.69a.83.83 0 0 0 .309-1.141.85.85 0 0 0-1.153-.306l-1.206.69a2.9 2.9 0 0 0-1.184-.677v-1.38A.85.85 0 0 0 48.5 84a.843.843 0 0 0-.844.82v1.38a2.96 2.96 0 0 0-1.185.674l-1.205-.689a.848.848 0 0 0-1.259.616.83.83 0 0 0 .415.832l1.204.689c-.106.445-.105.909.003 1.353l-1.207.69a.83.83 0 0 0-.415.832.83.83 0 0 0 .62.7.85.85 0 0 0 .64-.084l1.205-.69c.334.318.74.55 1.184.675v1.382a.85.85 0 0 0 .844.82.843.843 0 0 0 .844-.82v-1.383c.441-.129.847-.36 1.184-.673l1.206.69a.847.847 0 0 0 1.259-.616.83.83 0 0 0-.415-.832m-4.712-.28a1.24 1.24 0 0 1-.622-1.25 1.25 1.25 0 0 1 .93-1.048 1.27 1.27 0 0 1 1.329.445 1.25 1.25 0 0 1 .093 1.393 1.28 1.28 0 0 1-1.73.46"
              >
                <animateTransform
                  attributeName="transform"
                  begin="-0.8s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="-0.8s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
              <path
                id="overcast-day-snow__Snowflake 2"
                fill="#86c3db"
                d="m67.578 90.366-1.204-.689a2.9 2.9 0 0 0-.003-1.353l1.207-.69a.83.83 0 0 0 .309-1.141.85.85 0 0 0-1.153-.306l-1.206.69a2.9 2.9 0 0 0-1.184-.677v-1.38A.85.85 0 0 0 63.5 84a.843.843 0 0 0-.844.82v1.38a2.96 2.96 0 0 0-1.185.674l-1.205-.689a.848.848 0 0 0-1.259.616.83.83 0 0 0 .415.832l1.204.689c-.106.445-.105.909.003 1.353l-1.207.69a.83.83 0 0 0-.415.832.83.83 0 0 0 .62.7.85.85 0 0 0 .64-.084l1.205-.69c.334.318.74.55 1.184.675v1.382a.85.85 0 0 0 .844.82.843.843 0 0 0 .844-.82v-1.383c.441-.129.847-.36 1.184-.673l1.206.69a.847.847 0 0 0 1.259-.616.83.83 0 0 0-.415-.832m-4.712-.28a1.24 1.24 0 0 1-.622-1.25 1.25 1.25 0 0 1 .93-1.048 1.27 1.27 0 0 1 1.329.445 1.25 1.25 0 0 1 .093 1.393 1.28 1.28 0 0 1-1.73.46"
              >
                <animateTransform
                  attributeName="transform"
                  begin="-0.30000000000000004s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="-0.30000000000000004s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
              <path
                id="overcast-day-snow__Snowflake 3"
                fill="#86c3db"
                d="m82.578 90.366-1.204-.689a2.9 2.9 0 0 0-.003-1.353l1.207-.69a.83.83 0 0 0 .309-1.141.85.85 0 0 0-1.153-.306l-1.206.69a2.9 2.9 0 0 0-1.184-.677v-1.38A.85.85 0 0 0 78.5 84a.843.843 0 0 0-.844.82v1.38a2.96 2.96 0 0 0-1.185.674l-1.205-.689a.848.848 0 0 0-1.259.616.83.83 0 0 0 .415.832l1.204.689c-.106.445-.105.909.003 1.353l-1.207.69a.83.83 0 0 0-.415.832.83.83 0 0 0 .62.7.85.85 0 0 0 .64-.084l1.205-.69c.334.318.74.55 1.184.675v1.382a.85.85 0 0 0 .844.82.843.843 0 0 0 .844-.82v-1.383c.441-.129.847-.36 1.184-.673l1.206.69a.847.847 0 0 0 1.259-.616.83.83 0 0 0-.415-.832m-4.712-.28a1.24 1.24 0 0 1-.622-1.25 1.25 1.25 0 0 1 .93-1.048 1.27 1.27 0 0 1 1.329.445 1.25 1.25 0 0 1 .093 1.393 1.28 1.28 0 0 1-1.73.46"
              >
                <animateTransform
                  attributeName="transform"
                  begin="-0.8s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="-0.8s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            id="overcast-day-snow__paint0_linear_1858_8872"
            x1="39"
            x2="39"
            y1="42"
            y2="60"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#fbbf24" />
            <stop offset="1" stop-color="#f8af18" />
          </linearGradient>
          <linearGradient
            id="overcast-day-snow__paint1_linear_1858_8872"
            x1="88"
            x2="88"
            y1="44"
            y2="68"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#b0bccd" />
            <stop offset="1" stop-color="#94a3b8" />
          </linearGradient>
          <linearGradient
            id="overcast-day-snow__paint2_linear_1858_8872"
            x1="64.001"
            x2="64.001"
            y1="39"
            y2="89"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#f3f7fe" />
            <stop offset="1" stop-color="#e6effc" />
          </linearGradient>
          <clipPath id="overcast-day-snow__clip0_1858_8872">
            <rect width="128" height="128" fill="#fff" />
          </clipPath>
        </defs>
      </svg>
    ),
    nightIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128">
        <g
          id="overcast-day-snow__overcast-day-snow"
          clip-path="url(#overcast-day-snow__clip0_1858_8872)"
        >
          <g id="overcast-day-snow__Sky">
            <g id="overcast-day-snow__Sun">
              <circle
                id="overcast-day-snow__Core"
                cx="39"
                cy="51"
                r="8.5"
                fill="url(#overcast-day-snow__paint0_linear_1858_8872)"
                stroke="#f8af18"
              />
              <g id="overcast-day-snow__Rays">
                <path
                  fill="#f8af18"
                  d="M37.688 31.313a1.312 1.312 0 1 1 2.624 0v6.125a1.312 1.312 0 1 1-2.624 0zM51.993 36.15a1.312 1.312 0 1 1 1.856 1.857l-4.33 4.33a1.312 1.312 0 1 1-1.857-1.855zM58.688 49.688a1.312 1.312 0 1 1 0 2.624h-6.126a1.312 1.312 0 1 1 0-2.624zM53.85 63.993a1.312 1.312 0 1 1-1.857 1.856l-4.33-4.33a1.312 1.312 0 1 1 1.855-1.857zM37.688 64.563a1.312 1.312 0 1 1 2.624 0v6.124a1.312 1.312 0 1 1-2.624 0zM28.482 59.662a1.312 1.312 0 1 1 1.856 1.856l-4.331 4.331a1.312 1.312 0 1 1-1.856-1.856zM25.438 49.688a1.312 1.312 0 1 1 0 2.624h-6.125a1.312 1.312 0 1 1 0-2.624zM30.338 40.482a1.312 1.312 0 1 1-1.856 1.856l-4.331-4.331a1.312 1.312 0 1 1 1.856-1.856z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  dur="6s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 39.0 51.0;360 39.0 51.0"
                />
              </g>
            </g>
            <g id="overcast-day-snow__Clouds">
              <g id="overcast-day-snow__Secondary Cloud">
                <path
                  id="overcast-day-snow__Cloud"
                  fill="url(#overcast-day-snow__paint1_linear_1858_8872)"
                  stroke="#94a3b8"
                  stroke-miterlimit="10"
                  d="M83.84 48.693c2.404-3.735 7.375-5.164 11.478-3.516 4.043 1.624 6.496 6.012 5.392 10.26l-.17.653.675-.029c3.281-.137 6.285 2.404 6.285 5.713 0 3.202-2.831 5.726-6.011 5.726H74.977c-3.21 0-6.132-2.382-6.448-5.593-.315-3.2 2.088-6.066 5.235-6.636l.491-.09-.088-.49c-.394-2.198.645-4.442 2.518-5.664 1.925-1.256 4.492-1.32 6.483-.17l.413.237z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="3s"
                  keySplines=".42 0 .58 1; .42 0 .58 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 -3;0 0;0 -3"
                />
              </g>
              <g id="overcast-day-snow__Cloud_2">
                <path
                  id="overcast-day-snow__Cloud_3"
                  fill="url(#overcast-day-snow__paint2_linear_1858_8872)"
                  stroke="#e6effc"
                  stroke-miterlimit="10"
                  d="M55.262 48.475c4.86-7.864 15.035-11.095 23.553-7.532 8.506 3.56 13.323 13.06 11.088 22.022l-.161.65.669-.03c7.01-.306 13.089 5.407 13.089 12.443 0 6.811-5.728 12.472-12.523 12.472H37.954c-6.826.002-12.751-5.33-13.395-12.14-.643-6.808 4.178-13.148 10.884-14.415l.483-.092-.084-.484c-.816-4.745 1.284-9.652 5.263-12.356 3.99-2.712 9.34-2.86 13.475-.373l.423.255z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="3s"
                  keySplines=".42 0 .58 1; .42 0 .58 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 -3;0 0"
                />
              </g>
            </g>
          </g>
          <g id="overcast-day-snow__Precipitation">
            <g id="overcast-day-snow__Snowflakes">
              <path
                id="overcast-day-snow__Snowflake 1"
                fill="#86c3db"
                d="m52.578 90.366-1.205-.689a2.9 2.9 0 0 0-.002-1.353l1.207-.69a.83.83 0 0 0 .309-1.141.85.85 0 0 0-1.153-.306l-1.206.69a2.9 2.9 0 0 0-1.184-.677v-1.38A.85.85 0 0 0 48.5 84a.843.843 0 0 0-.844.82v1.38a2.96 2.96 0 0 0-1.185.674l-1.205-.689a.848.848 0 0 0-1.259.616.83.83 0 0 0 .415.832l1.204.689c-.106.445-.105.909.003 1.353l-1.207.69a.83.83 0 0 0-.415.832.83.83 0 0 0 .62.7.85.85 0 0 0 .64-.084l1.205-.69c.334.318.74.55 1.184.675v1.382a.85.85 0 0 0 .844.82.843.843 0 0 0 .844-.82v-1.383c.441-.129.847-.36 1.184-.673l1.206.69a.847.847 0 0 0 1.259-.616.83.83 0 0 0-.415-.832m-4.712-.28a1.24 1.24 0 0 1-.622-1.25 1.25 1.25 0 0 1 .93-1.048 1.27 1.27 0 0 1 1.329.445 1.25 1.25 0 0 1 .093 1.393 1.28 1.28 0 0 1-1.73.46"
              >
                <animateTransform
                  attributeName="transform"
                  begin="-0.8s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="-0.8s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
              <path
                id="overcast-day-snow__Snowflake 2"
                fill="#86c3db"
                d="m67.578 90.366-1.204-.689a2.9 2.9 0 0 0-.003-1.353l1.207-.69a.83.83 0 0 0 .309-1.141.85.85 0 0 0-1.153-.306l-1.206.69a2.9 2.9 0 0 0-1.184-.677v-1.38A.85.85 0 0 0 63.5 84a.843.843 0 0 0-.844.82v1.38a2.96 2.96 0 0 0-1.185.674l-1.205-.689a.848.848 0 0 0-1.259.616.83.83 0 0 0 .415.832l1.204.689c-.106.445-.105.909.003 1.353l-1.207.69a.83.83 0 0 0-.415.832.83.83 0 0 0 .62.7.85.85 0 0 0 .64-.084l1.205-.69c.334.318.74.55 1.184.675v1.382a.85.85 0 0 0 .844.82.843.843 0 0 0 .844-.82v-1.383c.441-.129.847-.36 1.184-.673l1.206.69a.847.847 0 0 0 1.259-.616.83.83 0 0 0-.415-.832m-4.712-.28a1.24 1.24 0 0 1-.622-1.25 1.25 1.25 0 0 1 .93-1.048 1.27 1.27 0 0 1 1.329.445 1.25 1.25 0 0 1 .093 1.393 1.28 1.28 0 0 1-1.73.46"
              >
                <animateTransform
                  attributeName="transform"
                  begin="-0.30000000000000004s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="-0.30000000000000004s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
              <path
                id="overcast-day-snow__Snowflake 3"
                fill="#86c3db"
                d="m82.578 90.366-1.204-.689a2.9 2.9 0 0 0-.003-1.353l1.207-.69a.83.83 0 0 0 .309-1.141.85.85 0 0 0-1.153-.306l-1.206.69a2.9 2.9 0 0 0-1.184-.677v-1.38A.85.85 0 0 0 78.5 84a.843.843 0 0 0-.844.82v1.38a2.96 2.96 0 0 0-1.185.674l-1.205-.689a.848.848 0 0 0-1.259.616.83.83 0 0 0 .415.832l1.204.689c-.106.445-.105.909.003 1.353l-1.207.69a.83.83 0 0 0-.415.832.83.83 0 0 0 .62.7.85.85 0 0 0 .64-.084l1.205-.69c.334.318.74.55 1.184.675v1.382a.85.85 0 0 0 .844.82.843.843 0 0 0 .844-.82v-1.383c.441-.129.847-.36 1.184-.673l1.206.69a.847.847 0 0 0 1.259-.616.83.83 0 0 0-.415-.832m-4.712-.28a1.24 1.24 0 0 1-.622-1.25 1.25 1.25 0 0 1 .93-1.048 1.27 1.27 0 0 1 1.329.445 1.25 1.25 0 0 1 .093 1.393 1.28 1.28 0 0 1-1.73.46"
              >
                <animateTransform
                  attributeName="transform"
                  begin="-0.8s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="-0.8s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            id="overcast-day-snow__paint0_linear_1858_8872"
            x1="39"
            x2="39"
            y1="42"
            y2="60"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#fbbf24" />
            <stop offset="1" stop-color="#f8af18" />
          </linearGradient>
          <linearGradient
            id="overcast-day-snow__paint1_linear_1858_8872"
            x1="88"
            x2="88"
            y1="44"
            y2="68"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#b0bccd" />
            <stop offset="1" stop-color="#94a3b8" />
          </linearGradient>
          <linearGradient
            id="overcast-day-snow__paint2_linear_1858_8872"
            x1="64.001"
            x2="64.001"
            y1="39"
            y2="89"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#f3f7fe" />
            <stop offset="1" stop-color="#e6effc" />
          </linearGradient>
          <clipPath id="overcast-day-snow__clip0_1858_8872">
            <rect width="128" height="128" fill="#fff" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    code: [85, 86],
    description: "Snow showers",
    dayIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128">
        <g
          id="overcast-day-snow__overcast-day-snow"
          clip-path="url(#overcast-day-snow__clip0_1858_8872)"
        >
          <g id="overcast-day-snow__Sky">
            <g id="overcast-day-snow__Sun">
              <circle
                id="overcast-day-snow__Core"
                cx="39"
                cy="51"
                r="8.5"
                fill="url(#overcast-day-snow__paint0_linear_1858_8872)"
                stroke="#f8af18"
              />
              <g id="overcast-day-snow__Rays">
                <path
                  fill="#f8af18"
                  d="M37.688 31.313a1.312 1.312 0 1 1 2.624 0v6.125a1.312 1.312 0 1 1-2.624 0zM51.993 36.15a1.312 1.312 0 1 1 1.856 1.857l-4.33 4.33a1.312 1.312 0 1 1-1.857-1.855zM58.688 49.688a1.312 1.312 0 1 1 0 2.624h-6.126a1.312 1.312 0 1 1 0-2.624zM53.85 63.993a1.312 1.312 0 1 1-1.857 1.856l-4.33-4.33a1.312 1.312 0 1 1 1.855-1.857zM37.688 64.563a1.312 1.312 0 1 1 2.624 0v6.124a1.312 1.312 0 1 1-2.624 0zM28.482 59.662a1.312 1.312 0 1 1 1.856 1.856l-4.331 4.331a1.312 1.312 0 1 1-1.856-1.856zM25.438 49.688a1.312 1.312 0 1 1 0 2.624h-6.125a1.312 1.312 0 1 1 0-2.624zM30.338 40.482a1.312 1.312 0 1 1-1.856 1.856l-4.331-4.331a1.312 1.312 0 1 1 1.856-1.856z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  dur="6s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 39.0 51.0;360 39.0 51.0"
                />
              </g>
            </g>
            <g id="overcast-day-snow__Clouds">
              <g id="overcast-day-snow__Secondary Cloud">
                <path
                  id="overcast-day-snow__Cloud"
                  fill="url(#overcast-day-snow__paint1_linear_1858_8872)"
                  stroke="#94a3b8"
                  stroke-miterlimit="10"
                  d="M83.84 48.693c2.404-3.735 7.375-5.164 11.478-3.516 4.043 1.624 6.496 6.012 5.392 10.26l-.17.653.675-.029c3.281-.137 6.285 2.404 6.285 5.713 0 3.202-2.831 5.726-6.011 5.726H74.977c-3.21 0-6.132-2.382-6.448-5.593-.315-3.2 2.088-6.066 5.235-6.636l.491-.09-.088-.49c-.394-2.198.645-4.442 2.518-5.664 1.925-1.256 4.492-1.32 6.483-.17l.413.237z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="3s"
                  keySplines=".42 0 .58 1; .42 0 .58 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 -3;0 0;0 -3"
                />
              </g>
              <g id="overcast-day-snow__Cloud_2">
                <path
                  id="overcast-day-snow__Cloud_3"
                  fill="url(#overcast-day-snow__paint2_linear_1858_8872)"
                  stroke="#e6effc"
                  stroke-miterlimit="10"
                  d="M55.262 48.475c4.86-7.864 15.035-11.095 23.553-7.532 8.506 3.56 13.323 13.06 11.088 22.022l-.161.65.669-.03c7.01-.306 13.089 5.407 13.089 12.443 0 6.811-5.728 12.472-12.523 12.472H37.954c-6.826.002-12.751-5.33-13.395-12.14-.643-6.808 4.178-13.148 10.884-14.415l.483-.092-.084-.484c-.816-4.745 1.284-9.652 5.263-12.356 3.99-2.712 9.34-2.86 13.475-.373l.423.255z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="3s"
                  keySplines=".42 0 .58 1; .42 0 .58 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 -3;0 0"
                />
              </g>
            </g>
          </g>
          <g id="overcast-day-snow__Precipitation">
            <g id="overcast-day-snow__Snowflakes">
              <path
                id="overcast-day-snow__Snowflake 1"
                fill="#86c3db"
                d="m52.578 90.366-1.205-.689a2.9 2.9 0 0 0-.002-1.353l1.207-.69a.83.83 0 0 0 .309-1.141.85.85 0 0 0-1.153-.306l-1.206.69a2.9 2.9 0 0 0-1.184-.677v-1.38A.85.85 0 0 0 48.5 84a.843.843 0 0 0-.844.82v1.38a2.96 2.96 0 0 0-1.185.674l-1.205-.689a.848.848 0 0 0-1.259.616.83.83 0 0 0 .415.832l1.204.689c-.106.445-.105.909.003 1.353l-1.207.69a.83.83 0 0 0-.415.832.83.83 0 0 0 .62.7.85.85 0 0 0 .64-.084l1.205-.69c.334.318.74.55 1.184.675v1.382a.85.85 0 0 0 .844.82.843.843 0 0 0 .844-.82v-1.383c.441-.129.847-.36 1.184-.673l1.206.69a.847.847 0 0 0 1.259-.616.83.83 0 0 0-.415-.832m-4.712-.28a1.24 1.24 0 0 1-.622-1.25 1.25 1.25 0 0 1 .93-1.048 1.27 1.27 0 0 1 1.329.445 1.25 1.25 0 0 1 .093 1.393 1.28 1.28 0 0 1-1.73.46"
              >
                <animateTransform
                  attributeName="transform"
                  begin="-0.8s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="-0.8s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
              <path
                id="overcast-day-snow__Snowflake 2"
                fill="#86c3db"
                d="m67.578 90.366-1.204-.689a2.9 2.9 0 0 0-.003-1.353l1.207-.69a.83.83 0 0 0 .309-1.141.85.85 0 0 0-1.153-.306l-1.206.69a2.9 2.9 0 0 0-1.184-.677v-1.38A.85.85 0 0 0 63.5 84a.843.843 0 0 0-.844.82v1.38a2.96 2.96 0 0 0-1.185.674l-1.205-.689a.848.848 0 0 0-1.259.616.83.83 0 0 0 .415.832l1.204.689c-.106.445-.105.909.003 1.353l-1.207.69a.83.83 0 0 0-.415.832.83.83 0 0 0 .62.7.85.85 0 0 0 .64-.084l1.205-.69c.334.318.74.55 1.184.675v1.382a.85.85 0 0 0 .844.82.843.843 0 0 0 .844-.82v-1.383c.441-.129.847-.36 1.184-.673l1.206.69a.847.847 0 0 0 1.259-.616.83.83 0 0 0-.415-.832m-4.712-.28a1.24 1.24 0 0 1-.622-1.25 1.25 1.25 0 0 1 .93-1.048 1.27 1.27 0 0 1 1.329.445 1.25 1.25 0 0 1 .093 1.393 1.28 1.28 0 0 1-1.73.46"
              >
                <animateTransform
                  attributeName="transform"
                  begin="-0.30000000000000004s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="-0.30000000000000004s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
              <path
                id="overcast-day-snow__Snowflake 3"
                fill="#86c3db"
                d="m82.578 90.366-1.204-.689a2.9 2.9 0 0 0-.003-1.353l1.207-.69a.83.83 0 0 0 .309-1.141.85.85 0 0 0-1.153-.306l-1.206.69a2.9 2.9 0 0 0-1.184-.677v-1.38A.85.85 0 0 0 78.5 84a.843.843 0 0 0-.844.82v1.38a2.96 2.96 0 0 0-1.185.674l-1.205-.689a.848.848 0 0 0-1.259.616.83.83 0 0 0 .415.832l1.204.689c-.106.445-.105.909.003 1.353l-1.207.69a.83.83 0 0 0-.415.832.83.83 0 0 0 .62.7.85.85 0 0 0 .64-.084l1.205-.69c.334.318.74.55 1.184.675v1.382a.85.85 0 0 0 .844.82.843.843 0 0 0 .844-.82v-1.383c.441-.129.847-.36 1.184-.673l1.206.69a.847.847 0 0 0 1.259-.616.83.83 0 0 0-.415-.832m-4.712-.28a1.24 1.24 0 0 1-.622-1.25 1.25 1.25 0 0 1 .93-1.048 1.27 1.27 0 0 1 1.329.445 1.25 1.25 0 0 1 .093 1.393 1.28 1.28 0 0 1-1.73.46"
              >
                <animateTransform
                  attributeName="transform"
                  begin="-0.8s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="-0.8s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            id="overcast-day-snow__paint0_linear_1858_8872"
            x1="39"
            x2="39"
            y1="42"
            y2="60"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#fbbf24" />
            <stop offset="1" stop-color="#f8af18" />
          </linearGradient>
          <linearGradient
            id="overcast-day-snow__paint1_linear_1858_8872"
            x1="88"
            x2="88"
            y1="44"
            y2="68"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#b0bccd" />
            <stop offset="1" stop-color="#94a3b8" />
          </linearGradient>
          <linearGradient
            id="overcast-day-snow__paint2_linear_1858_8872"
            x1="64.001"
            x2="64.001"
            y1="39"
            y2="89"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#f3f7fe" />
            <stop offset="1" stop-color="#e6effc" />
          </linearGradient>
          <clipPath id="overcast-day-snow__clip0_1858_8872">
            <rect width="128" height="128" fill="#fff" />
          </clipPath>
        </defs>
      </svg>
    ),
    nightIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128">
        <g
          id="overcast-day-snow__overcast-day-snow"
          clip-path="url(#overcast-day-snow__clip0_1858_8872)"
        >
          <g id="overcast-day-snow__Sky">
            <g id="overcast-day-snow__Sun">
              <circle
                id="overcast-day-snow__Core"
                cx="39"
                cy="51"
                r="8.5"
                fill="url(#overcast-day-snow__paint0_linear_1858_8872)"
                stroke="#f8af18"
              />
              <g id="overcast-day-snow__Rays">
                <path
                  fill="#f8af18"
                  d="M37.688 31.313a1.312 1.312 0 1 1 2.624 0v6.125a1.312 1.312 0 1 1-2.624 0zM51.993 36.15a1.312 1.312 0 1 1 1.856 1.857l-4.33 4.33a1.312 1.312 0 1 1-1.857-1.855zM58.688 49.688a1.312 1.312 0 1 1 0 2.624h-6.126a1.312 1.312 0 1 1 0-2.624zM53.85 63.993a1.312 1.312 0 1 1-1.857 1.856l-4.33-4.33a1.312 1.312 0 1 1 1.855-1.857zM37.688 64.563a1.312 1.312 0 1 1 2.624 0v6.124a1.312 1.312 0 1 1-2.624 0zM28.482 59.662a1.312 1.312 0 1 1 1.856 1.856l-4.331 4.331a1.312 1.312 0 1 1-1.856-1.856zM25.438 49.688a1.312 1.312 0 1 1 0 2.624h-6.125a1.312 1.312 0 1 1 0-2.624zM30.338 40.482a1.312 1.312 0 1 1-1.856 1.856l-4.331-4.331a1.312 1.312 0 1 1 1.856-1.856z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  dur="6s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 39.0 51.0;360 39.0 51.0"
                />
              </g>
            </g>
            <g id="overcast-day-snow__Clouds">
              <g id="overcast-day-snow__Secondary Cloud">
                <path
                  id="overcast-day-snow__Cloud"
                  fill="url(#overcast-day-snow__paint1_linear_1858_8872)"
                  stroke="#94a3b8"
                  stroke-miterlimit="10"
                  d="M83.84 48.693c2.404-3.735 7.375-5.164 11.478-3.516 4.043 1.624 6.496 6.012 5.392 10.26l-.17.653.675-.029c3.281-.137 6.285 2.404 6.285 5.713 0 3.202-2.831 5.726-6.011 5.726H74.977c-3.21 0-6.132-2.382-6.448-5.593-.315-3.2 2.088-6.066 5.235-6.636l.491-.09-.088-.49c-.394-2.198.645-4.442 2.518-5.664 1.925-1.256 4.492-1.32 6.483-.17l.413.237z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="3s"
                  keySplines=".42 0 .58 1; .42 0 .58 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 -3;0 0;0 -3"
                />
              </g>
              <g id="overcast-day-snow__Cloud_2">
                <path
                  id="overcast-day-snow__Cloud_3"
                  fill="url(#overcast-day-snow__paint2_linear_1858_8872)"
                  stroke="#e6effc"
                  stroke-miterlimit="10"
                  d="M55.262 48.475c4.86-7.864 15.035-11.095 23.553-7.532 8.506 3.56 13.323 13.06 11.088 22.022l-.161.65.669-.03c7.01-.306 13.089 5.407 13.089 12.443 0 6.811-5.728 12.472-12.523 12.472H37.954c-6.826.002-12.751-5.33-13.395-12.14-.643-6.808 4.178-13.148 10.884-14.415l.483-.092-.084-.484c-.816-4.745 1.284-9.652 5.263-12.356 3.99-2.712 9.34-2.86 13.475-.373l.423.255z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="3s"
                  keySplines=".42 0 .58 1; .42 0 .58 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 -3;0 0"
                />
              </g>
            </g>
          </g>
          <g id="overcast-day-snow__Precipitation">
            <g id="overcast-day-snow__Snowflakes">
              <path
                id="overcast-day-snow__Snowflake 1"
                fill="#86c3db"
                d="m52.578 90.366-1.205-.689a2.9 2.9 0 0 0-.002-1.353l1.207-.69a.83.83 0 0 0 .309-1.141.85.85 0 0 0-1.153-.306l-1.206.69a2.9 2.9 0 0 0-1.184-.677v-1.38A.85.85 0 0 0 48.5 84a.843.843 0 0 0-.844.82v1.38a2.96 2.96 0 0 0-1.185.674l-1.205-.689a.848.848 0 0 0-1.259.616.83.83 0 0 0 .415.832l1.204.689c-.106.445-.105.909.003 1.353l-1.207.69a.83.83 0 0 0-.415.832.83.83 0 0 0 .62.7.85.85 0 0 0 .64-.084l1.205-.69c.334.318.74.55 1.184.675v1.382a.85.85 0 0 0 .844.82.843.843 0 0 0 .844-.82v-1.383c.441-.129.847-.36 1.184-.673l1.206.69a.847.847 0 0 0 1.259-.616.83.83 0 0 0-.415-.832m-4.712-.28a1.24 1.24 0 0 1-.622-1.25 1.25 1.25 0 0 1 .93-1.048 1.27 1.27 0 0 1 1.329.445 1.25 1.25 0 0 1 .093 1.393 1.28 1.28 0 0 1-1.73.46"
              >
                <animateTransform
                  attributeName="transform"
                  begin="-0.8s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="-0.8s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
              <path
                id="overcast-day-snow__Snowflake 2"
                fill="#86c3db"
                d="m67.578 90.366-1.204-.689a2.9 2.9 0 0 0-.003-1.353l1.207-.69a.83.83 0 0 0 .309-1.141.85.85 0 0 0-1.153-.306l-1.206.69a2.9 2.9 0 0 0-1.184-.677v-1.38A.85.85 0 0 0 63.5 84a.843.843 0 0 0-.844.82v1.38a2.96 2.96 0 0 0-1.185.674l-1.205-.689a.848.848 0 0 0-1.259.616.83.83 0 0 0 .415.832l1.204.689c-.106.445-.105.909.003 1.353l-1.207.69a.83.83 0 0 0-.415.832.83.83 0 0 0 .62.7.85.85 0 0 0 .64-.084l1.205-.69c.334.318.74.55 1.184.675v1.382a.85.85 0 0 0 .844.82.843.843 0 0 0 .844-.82v-1.383c.441-.129.847-.36 1.184-.673l1.206.69a.847.847 0 0 0 1.259-.616.83.83 0 0 0-.415-.832m-4.712-.28a1.24 1.24 0 0 1-.622-1.25 1.25 1.25 0 0 1 .93-1.048 1.27 1.27 0 0 1 1.329.445 1.25 1.25 0 0 1 .093 1.393 1.28 1.28 0 0 1-1.73.46"
              >
                <animateTransform
                  attributeName="transform"
                  begin="-0.30000000000000004s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="-0.30000000000000004s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
              <path
                id="overcast-day-snow__Snowflake 3"
                fill="#86c3db"
                d="m82.578 90.366-1.204-.689a2.9 2.9 0 0 0-.003-1.353l1.207-.69a.83.83 0 0 0 .309-1.141.85.85 0 0 0-1.153-.306l-1.206.69a2.9 2.9 0 0 0-1.184-.677v-1.38A.85.85 0 0 0 78.5 84a.843.843 0 0 0-.844.82v1.38a2.96 2.96 0 0 0-1.185.674l-1.205-.689a.848.848 0 0 0-1.259.616.83.83 0 0 0 .415.832l1.204.689c-.106.445-.105.909.003 1.353l-1.207.69a.83.83 0 0 0-.415.832.83.83 0 0 0 .62.7.85.85 0 0 0 .64-.084l1.205-.69c.334.318.74.55 1.184.675v1.382a.85.85 0 0 0 .844.82.843.843 0 0 0 .844-.82v-1.383c.441-.129.847-.36 1.184-.673l1.206.69a.847.847 0 0 0 1.259-.616.83.83 0 0 0-.415-.832m-4.712-.28a1.24 1.24 0 0 1-.622-1.25 1.25 1.25 0 0 1 .93-1.048 1.27 1.27 0 0 1 1.329.445 1.25 1.25 0 0 1 .093 1.393 1.28 1.28 0 0 1-1.73.46"
              >
                <animateTransform
                  attributeName="transform"
                  begin="-0.8s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="-0.8s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            id="overcast-day-snow__paint0_linear_1858_8872"
            x1="39"
            x2="39"
            y1="42"
            y2="60"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#fbbf24" />
            <stop offset="1" stop-color="#f8af18" />
          </linearGradient>
          <linearGradient
            id="overcast-day-snow__paint1_linear_1858_8872"
            x1="88"
            x2="88"
            y1="44"
            y2="68"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#b0bccd" />
            <stop offset="1" stop-color="#94a3b8" />
          </linearGradient>
          <linearGradient
            id="overcast-day-snow__paint2_linear_1858_8872"
            x1="64.001"
            x2="64.001"
            y1="39"
            y2="89"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#f3f7fe" />
            <stop offset="1" stop-color="#e6effc" />
          </linearGradient>
          <clipPath id="overcast-day-snow__clip0_1858_8872">
            <rect width="128" height="128" fill="#fff" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    code: [95, 96, 99],
    description: "Thunderstorm",
    dayIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128">
        <g
          id="thunderstorms-overcast-day-rain__thunderstorms-overcast-day-rain"
          clip-path="url(#thunderstorms-overcast-day-rain__clip0_1858_9945)"
        >
          <g id="thunderstorms-overcast-day-rain__Sky">
            <g id="thunderstorms-overcast-day-rain__Sun">
              <circle
                id="thunderstorms-overcast-day-rain__Core"
                cx="39"
                cy="51"
                r="8.5"
                fill="url(#thunderstorms-overcast-day-rain__paint0_linear_1858_9945)"
                stroke="#f8af18"
              />
              <g id="thunderstorms-overcast-day-rain__Rays">
                <path
                  fill="#f8af18"
                  d="M37.688 31.313a1.312 1.312 0 1 1 2.624 0v6.125a1.312 1.312 0 1 1-2.624 0zM51.993 36.15a1.312 1.312 0 1 1 1.856 1.857l-4.33 4.33a1.312 1.312 0 1 1-1.857-1.855zM58.688 49.688a1.312 1.312 0 1 1 0 2.624h-6.126a1.312 1.312 0 1 1 0-2.624zM53.85 63.993a1.312 1.312 0 1 1-1.857 1.856l-4.33-4.33a1.312 1.312 0 1 1 1.855-1.857zM37.688 64.563a1.312 1.312 0 1 1 2.624 0v6.124a1.312 1.312 0 1 1-2.624 0zM28.482 59.662a1.312 1.312 0 1 1 1.856 1.856l-4.331 4.331a1.312 1.312 0 1 1-1.856-1.856zM25.438 49.688a1.312 1.312 0 1 1 0 2.624h-6.125a1.312 1.312 0 1 1 0-2.624zM30.338 40.482a1.312 1.312 0 1 1-1.856 1.856l-4.331-4.331a1.312 1.312 0 1 1 1.856-1.856z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  dur="6s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 39.0 51.0;360 39.0 51.0"
                />
              </g>
            </g>
            <g id="thunderstorms-overcast-day-rain__Clouds">
              <g id="thunderstorms-overcast-day-rain__Secondary Cloud">
                <path
                  id="thunderstorms-overcast-day-rain__Cloud"
                  fill="url(#thunderstorms-overcast-day-rain__paint1_linear_1858_9945)"
                  stroke="#94a3b8"
                  stroke-miterlimit="10"
                  d="M83.84 48.693c2.404-3.735 7.375-5.164 11.478-3.516 4.043 1.624 6.496 6.012 5.392 10.26l-.169.653.674-.029c3.281-.137 6.285 2.404 6.285 5.713 0 3.202-2.831 5.726-6.011 5.726H74.977c-3.209 0-6.132-2.382-6.448-5.593-.315-3.2 2.088-6.066 5.235-6.636l.491-.09-.087-.49c-.394-2.198.644-4.442 2.517-5.664 1.926-1.256 4.492-1.32 6.483-.17l.413.237z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="3s"
                  keySplines=".42 0 .58 1; .42 0 .58 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 -3;0 0;0 -3"
                />
              </g>
              <g id="thunderstorms-overcast-day-rain__Cloud_2">
                <path
                  id="thunderstorms-overcast-day-rain__Cloud_3"
                  fill="url(#thunderstorms-overcast-day-rain__paint2_linear_1858_9945)"
                  stroke="#e6effc"
                  stroke-miterlimit="10"
                  d="M55.263 48.475c4.86-7.864 15.035-11.095 23.552-7.532 8.507 3.56 13.323 13.06 11.088 22.022l-.161.65.669-.03c7.01-.306 13.089 5.407 13.089 12.443 0 6.811-5.728 12.472-12.523 12.472H37.954c-6.826.002-12.751-5.33-13.395-12.14-.643-6.808 4.178-13.148 10.884-14.415l.483-.092-.084-.484c-.816-4.745 1.284-9.652 5.263-12.356 3.99-2.712 9.341-2.86 13.475-.373l.423.255z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="3s"
                  keySplines=".42 0 .58 1; .42 0 .58 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 -3;0 0"
                />
              </g>
            </g>
          </g>
          <g id="thunderstorms-overcast-day-rain__Precipitation">
            <g id="thunderstorms-overcast-day-rain__Raindrops">
              <path
                id="thunderstorms-overcast-day-rain__Raindrop 1"
                stroke="#0a5ad4"
                stroke-linecap="round"
                stroke-width="4"
                d="M52 83v12"
              >
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="0s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
              <path
                id="thunderstorms-overcast-day-rain__Raindrop 2"
                stroke="#0a5ad4"
                stroke-linecap="round"
                stroke-width="4"
                d="M64 83v12"
              >
                <animateTransform
                  attributeName="transform"
                  begin="-0.6s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="-0.6s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
              <path
                id="thunderstorms-overcast-day-rain__Raindrop 3"
                stroke="#0a5ad4"
                stroke-linecap="round"
                stroke-width="4"
                d="M76 83v12"
              >
                <animateTransform
                  attributeName="transform"
                  begin="-0.19999999999999996s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="-0.19999999999999996s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
            </g>
          </g>
          <g id="thunderstorms-overcast-day-rain__Lightning">
            <path
              id="thunderstorms-overcast-day-rain__Lightning Bolt"
              fill="url(#thunderstorms-overcast-day-rain__paint3_linear_1858_9945)"
              stroke="#f6a823"
              stroke-miterlimit="10"
              d="m71.173 68.5-7.616 14.541-.384.731h11.829l-18.05 24.12 3.537-16.88.127-.603h-7.912L60.355 68.5z"
            >
              <animate
                attributeName="opacity"
                begin="0s"
                dur="2s"
                keyTimes="0;0.25;0.33;0.42;0.5;0.57;0.63;0.67;1"
                repeatCount="indefinite"
                values="1;1;0;1;0;1;0;1;1"
              />
            </path>
          </g>
        </g>
        <defs>
          <linearGradient
            id="thunderstorms-overcast-day-rain__paint0_linear_1858_9945"
            x1="39"
            x2="39"
            y1="42"
            y2="60"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#fbbf24" />
            <stop offset="1" stop-color="#f8af18" />
          </linearGradient>
          <linearGradient
            id="thunderstorms-overcast-day-rain__paint1_linear_1858_9945"
            x1="88"
            x2="88"
            y1="44"
            y2="68"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#b0bccd" />
            <stop offset="1" stop-color="#94a3b8" />
          </linearGradient>
          <linearGradient
            id="thunderstorms-overcast-day-rain__paint2_linear_1858_9945"
            x1="64.001"
            x2="64.001"
            y1="39"
            y2="89"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#f3f7fe" />
            <stop offset="1" stop-color="#e6effc" />
          </linearGradient>
          <linearGradient
            id="thunderstorms-overcast-day-rain__paint3_linear_1858_9945"
            x1="64.528"
            x2="84.414"
            y1="66.038"
            y2="77.457"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#f7b23b" />
            <stop offset="1" stop-color="#f6a823" />
          </linearGradient>
          <clipPath id="thunderstorms-overcast-day-rain__clip0_1858_9945">
            <rect width="128" height="128" fill="#fff" />
          </clipPath>
        </defs>
      </svg>
    ),
    nightIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128">
        <g
          id="thunderstorms-overcast-night-rain__thunderstorms-overcast-night-rain"
          clip-path="url(#thunderstorms-overcast-night-rain__clip0_1858_9948)"
        >
          <g id="thunderstorms-overcast-night-rain__Sky">
            <g id="thunderstorms-overcast-night-rain__Moon">
              <path
                id="thunderstorms-overcast-night-rain__Moon_2"
                fill="url(#thunderstorms-overcast-night-rain__paint0_linear_1858_9948)"
                stroke="#72b9d5"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M35.115 34.595c-1.737 8.568 5.638 16.62 14.198 16.188-1.64 5.05-6.424 8.717-12.095 8.717-7.03 0-12.718-5.621-12.718-12.541 0-6.214 4.588-11.375 10.615-12.364"
              />
              <animateTransform
                attributeName="transform"
                begin="0s"
                calcMode="spline"
                dur="3s"
                keySplines=".42 0 .58 1; .42 0 .58 1"
                repeatCount="indefinite"
                type="rotate"
                values="-6 36.9 47.0;6 36.9 47.0;-6 36.9 47.0"
              />
            </g>
            <g id="thunderstorms-overcast-night-rain__Clouds">
              <g id="thunderstorms-overcast-night-rain__Secondary Cloud">
                <path
                  id="thunderstorms-overcast-night-rain__Cloud"
                  fill="url(#thunderstorms-overcast-night-rain__paint1_linear_1858_9948)"
                  stroke="#94a3b8"
                  stroke-miterlimit="10"
                  d="M83.84 48.693c2.404-3.735 7.375-5.164 11.478-3.516 4.043 1.624 6.496 6.012 5.392 10.26l-.169.653.674-.029c3.281-.137 6.285 2.404 6.285 5.713 0 3.202-2.831 5.726-6.011 5.726H74.977c-3.209 0-6.132-2.382-6.448-5.593-.315-3.2 2.088-6.066 5.235-6.636l.491-.09-.087-.49c-.394-2.198.644-4.442 2.517-5.664 1.926-1.256 4.492-1.32 6.483-.17l.413.237z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="3s"
                  keySplines=".42 0 .58 1; .42 0 .58 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 -3;0 0;0 -3"
                />
              </g>
              <g id="thunderstorms-overcast-night-rain__Cloud_2">
                <path
                  id="thunderstorms-overcast-night-rain__Cloud_3"
                  fill="url(#thunderstorms-overcast-night-rain__paint2_linear_1858_9948)"
                  stroke="#e6effc"
                  stroke-miterlimit="10"
                  d="M55.263 48.475c4.86-7.864 15.035-11.095 23.552-7.532 8.507 3.56 13.323 13.06 11.088 22.022l-.161.65.669-.03c7.01-.306 13.089 5.407 13.089 12.443 0 6.811-5.728 12.472-12.523 12.472H37.954c-6.826.002-12.751-5.33-13.395-12.14-.643-6.808 4.178-13.148 10.884-14.415l.483-.092-.084-.484c-.816-4.745 1.284-9.652 5.263-12.356 3.99-2.712 9.341-2.86 13.475-.373l.423.255z"
                />
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="3s"
                  keySplines=".42 0 .58 1; .42 0 .58 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 -3;0 0"
                />
              </g>
            </g>
          </g>
          <g id="thunderstorms-overcast-night-rain__Precipitation">
            <g id="thunderstorms-overcast-night-rain__Raindrops">
              <path
                id="thunderstorms-overcast-night-rain__Raindrop 1"
                stroke="#0a5ad4"
                stroke-linecap="round"
                stroke-width="4"
                d="M52 83v12"
              >
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="0s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
              <path
                id="thunderstorms-overcast-night-rain__Raindrop 2"
                stroke="#0a5ad4"
                stroke-linecap="round"
                stroke-width="4"
                d="M64 83v12"
              >
                <animateTransform
                  attributeName="transform"
                  begin="-0.6s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="-0.6s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
              <path
                id="thunderstorms-overcast-night-rain__Raindrop 3"
                stroke="#0a5ad4"
                stroke-linecap="round"
                stroke-width="4"
                d="M76 83v12"
              >
                <animateTransform
                  attributeName="transform"
                  begin="-0.19999999999999996s"
                  calcMode="spline"
                  dur="1s"
                  keySplines=".42 0 1 1"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0;0 20"
                />
                <animate
                  attributeName="opacity"
                  begin="-0.19999999999999996s"
                  dur="1s"
                  keyTimes="0;0.15;0.85;1"
                  repeatCount="indefinite"
                  values="0;1;1;0"
                />
              </path>
            </g>
          </g>
          <g id="thunderstorms-overcast-night-rain__Lightning">
            <path
              id="thunderstorms-overcast-night-rain__Lightning Bolt"
              fill="url(#thunderstorms-overcast-night-rain__paint3_linear_1858_9948)"
              stroke="#f6a823"
              stroke-miterlimit="10"
              d="m71.173 68.5-7.616 14.541-.384.731h11.829l-18.05 24.12 3.537-16.88.127-.603h-7.912L60.355 68.5z"
            >
              <animate
                attributeName="opacity"
                begin="0s"
                dur="2s"
                keyTimes="0;0.25;0.33;0.42;0.5;0.57;0.63;0.67;1"
                repeatCount="indefinite"
                values="1;1;0;1;0;1;0;1;1"
              />
            </path>
          </g>
        </g>
        <defs>
          <linearGradient
            id="thunderstorms-overcast-night-rain__paint0_linear_1858_9948"
            x1="37"
            x2="37"
            y1="34"
            y2="60"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#86c3db" />
            <stop offset="1" stop-color="#72b9d5" />
          </linearGradient>
          <linearGradient
            id="thunderstorms-overcast-night-rain__paint1_linear_1858_9948"
            x1="88"
            x2="88"
            y1="44"
            y2="68"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#b0bccd" />
            <stop offset="1" stop-color="#94a3b8" />
          </linearGradient>
          <linearGradient
            id="thunderstorms-overcast-night-rain__paint2_linear_1858_9948"
            x1="64.001"
            x2="64.001"
            y1="39"
            y2="89"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#f3f7fe" />
            <stop offset="1" stop-color="#e6effc" />
          </linearGradient>
          <linearGradient
            id="thunderstorms-overcast-night-rain__paint3_linear_1858_9948"
            x1="64.528"
            x2="84.414"
            y1="66.038"
            y2="77.457"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#f7b23b" />
            <stop offset="1" stop-color="#f6a823" />
          </linearGradient>
          <clipPath id="thunderstorms-overcast-night-rain__clip0_1858_9948">
            <rect width="128" height="128" fill="#fff" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  //   56: "Freezing Drizzle: Light ",
  //   57: "Freezing Drizzle: dense intensity",
  //   61: "Rain: Slight",
  //   63: "Rain: Moderate",
  //   65: "Rain: Heavy intensity",
  //   66: "Freezing Rain: Light ",
  //   67: "Freezing Rain: Heavy intesity",
  //   71: "Snow fall: Slight",
  //   73: "Snow fall: Moderate",
  //   75: "Show fall: Heavy intensity",
  //   77: "Snow grains",
  //   80: "Rain showers: Slight",
  //   81: "Rain showers: Moderate",
  //   82: "Rain showers: Violent",
  //   85: "Snow showers slight",
  //   86: "Snow Showers: Heavy",
  //   95: "Thunderstorm: Slight or moderate",
  //   96: "Thunderstorm with slight",
  //   99: "Thunderstorm with heavy hail",
  // },
];
