<?php

namespace App\Http\Requests;

use App\Models\Element;
use App\Models\Turbine;
use Illuminate\Foundation\Http\FormRequest;

class TurbineRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'country' => 'nullable',
            'location' => 'nullable'
        ];
    }

    /**
     * @param Turbine $turbine
     * @return Turbine
     */
    public function persist(Turbine $turbine)
    {
        $turbine->country = $this->country;
        $turbine->location = $this->location;
        $turbine->efficiency = $this->efficiency;
        $turbine->height = $this->height;

        $turbine->save();

        return $turbine;
    }
}
