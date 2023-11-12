'use client'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/navigation'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SingleFilter({title, array}) {
  const [selected, setSelected] = useState(array[0]);
  const router = useRouter()
  const URLParamsFunc = (e)=>{

    const searchParams = new URLSearchParams(window.location.search)
      searchParams.set(title, e.value)
    const newPathname = `${window.location.pathname}?${searchParams}`;
    router.push(newPathname)
  }

  return (
    <Listbox value={selected}
     onChange={(e)=>{
      console.log(e)
      setSelected(e)
      URLParamsFunc(e)
    }}>
      {({ open }) => (
        <>
          <div className="relative mt-2 shadow-lg font-montserrat">
            <Listbox.Button className="relative w-fit cursor-default rounded-md bg-indigo-900 py-1.5 pl-3 pr-10 text-left text-white shadow-sm    sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span className="ml-3 block truncate">{selected.title}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-fit overflow-auto rounded-md bg-indigo-900 py-1 text-base shadow-lg  sm:text-sm">
                {array.map((item) => (
                  <Listbox.Option
                    key={item.title}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 ' : 'text-white',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {item.title}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-white',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
