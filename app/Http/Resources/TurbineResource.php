<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TurbineResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        switch(true) {
            case ($this->efficiency >= 0 && $this->efficiency < 26):
            $efficiencyColor = "danger";
                break;
            case ($this->efficiency >= 26 && $this->efficiency < 51):
                $efficiencyColor = "warning";
                break;
            case ($this->efficiency >= 51 && $this->efficiency < 76):
                $efficiencyColor = "primary";
                break;
            case ($this->efficiency >= 76 && $this->efficiency <= 100):
                $efficiencyColor = "success";
                break;
        }

        return [
            'id' => $this->id,
            'country' => $this->country,
            'location' => $this->location,
            'efficiency' => $this->efficiency,
            'height' => $this->height,
            'efficiencyColor' => $efficiencyColor
        ];
    }
}
