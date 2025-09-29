
import {Card, CardHeader} from "../ui/card"

export function LinkCard({ blok }) {
 
    console.log(blok)
  return (
    <a href={blok.url} target="_blank">
   <Card className="w-full px-4 cursor-pointer">

      <CardHeader className="flex items-center justify-start  gap-2 p-0">
{
    blok.image.filename && (
            <img
          alt="heroui logo"
        
            className="size-12 rounded-sm"
          src={blok.image.filename}
          width={40}
        />
    )
}

        <div className="flex flex-col">
          <p className="text-md font-semibold">{blok.cta}</p>
          <p className="text-small text-default-500">{}</p>
        </div>
      </CardHeader>
    </Card>
    </a>
  )
}



