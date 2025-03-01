import './DimensionCube.css'

export default function DimensionCube(){
  return (
    <div className='bg-slate-600 rounded-full w-[330px] h-[330px] flex flex-center'>
      <div className="cubeBGcolor">
        <div className="bg-circle"></div>
        <div className='cube'>
          <div className="front side"></div>
          <div className="back side"></div>
          <div className="left side"></div>
          <div className="right side"></div>
          <div className="top side"></div>
          <div className="bottom side"></div>
        </div>
      </div>
    </div>
  )
}