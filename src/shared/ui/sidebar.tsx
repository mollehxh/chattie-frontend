import tw from 'tailwind-styled-components';

export const Sidebar = tw.div<{ right?: boolean }>`
absolute
w-[293px]
h-screen
bg-zinc-800
border-solid
overflow-hidden
scrollbar-hide
border-zinc-700
${({ right }) => (right && 'right-0 top-0 border-l') || 'border-r'}
`;
