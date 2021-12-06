<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TurbineRequest;
use App\Http\Resources\TurbineCollection;
use App\Http\Resources\TurbineResource;
use App\Models\Element;
use App\Models\Turbine;

class TurbineController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(new TurbineCollection(Turbine::get()));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TurbineRequest $request)
    {
        $turbine = $request->persist(new Turbine());

        $setOfElements = [];
        for($i=1; $i<=100; $i++) {
            $single = [
                'turbine_id' => $turbine->id,
                'element_number' => $i,
                'element_name' => 'Element_' . $i
            ];
            $setOfElements[] = $single;
        }
        Element::insert($setOfElements);

        return response()->json(new TurbineResource($turbine));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param TurbineRequest $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(TurbineRequest $request, $id)
    {
        $turbine = $request->persist(Turbine::findOrFail($id));

        return response()->json(new TurbineResource($turbine));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $turbine = Turbine::findOrFail($id);
        $turbine->delete();

        $element = Element::where('turbine_id', $id)->get('id')->toArray();
        Element::destroy($element);

        return response()->json(["status" => "OK"], 200);
    }
}
