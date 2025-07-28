import './Styles/Cell.css';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Cell = ({ children = '', index, updateBoard, winnerCells }: { children?: string, index: number, updateBoard: any, winnerCells: number[]}) => { 
    const handlerClick = () => { 
        updateBoard(index);
    }

    const className = winnerCells?.includes(index) ? 'board__row-cell winner' : 'board__row-cell';

    return (
        <div className={className} onClick={ handlerClick }>{ children }</div>
    )
}