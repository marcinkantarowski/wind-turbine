<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ElementResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'turbine_id' => $this->turbine_id,
            'element_number' => $this->element_number,
            'element_name' => $this->element_name,
        ];
    }
}
