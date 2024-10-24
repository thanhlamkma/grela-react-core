interface AppErrorProps {
  statusCode: number;
  title: string;
  description?: string;
}

export default function CoreError({ statusCode, title, description }: AppErrorProps) {
  return (
    <div className='flex flex-col items-center w-full gap-3'>
      <h1 className='text-3xl font-bold'>{statusCode}</h1>

      <h3 className='text-lg font-semibold text-neutral-800'>{title}</h3>

      {description ? <p className='text-neutral-400'>{description}</p> : null}
    </div>
  );
}
