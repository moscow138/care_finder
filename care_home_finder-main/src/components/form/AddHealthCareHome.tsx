'use client';

import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useToast } from '../ui/use-toast';

const CategorySchema = z
  .object({
    categoryname: z.string().min(1, 'A name is required!').max(100),
    categoryimage: z.string().min(1, 'Image is required'),

  })


const AddHealthCareHome = () => {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof CategorySchema>>({
    resolver: zodResolver(CategorySchema),
    defaultValues: {
      categoryname: '',
      categoryimage: '',
    }
  });
 //send form data using POST method to database..
  const onSubmit = async (values: z.infer<typeof CategorySchema>) => {
    const response = await fetch('/api/category', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        categoryname: values.categoryname,
        categoryimage: values.categoryimage,
        
      })
    });
 //check if submit is successful... 
 if(response.ok){
  //redirect user to sigin page...
  router.push('/admin');
 }else{
  console.error('Adding New category Failed!')
  toast({
    title: "Error",
    description: "Adding New category Failed, Please try again!",
    variant: "destructive"
  })
 }

  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
        <div className='space-y-2'>
          <FormField
            control={form.control}
            name='healthcarename'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Health care Name: </FormLabel>
                <FormControl>
                  <Input placeholder='Federal hospital,...' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
             <FormField
            control={form.control}
            name='numofdoctors'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nums of doctors: </FormLabel>
                <FormControl>
                  <Input type='number' placeholder='1,2,3,4,5,6,7,8,9 etc' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
             <FormField
            control={form.control}
            name='numofnurses'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nums of nurses: </FormLabel>
                <FormControl>
                  <Input placeholder='1,2,3,4,5,6,7,8,9 etc' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
             <FormField
            control={form.control}
            name='state'
            render={({ field }) => (
              <FormItem>
                <FormLabel>State: </FormLabel>
                <FormControl>
                  <Input placeholder='Lagos, Asaba, etc' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
             <FormField
            control={form.control}
            name='city'
            render={({ field }) => (
              <FormItem>
                <FormLabel>City: </FormLabel>
                <FormControl>
                  <Input placeholder='lekki, island, ojo etc' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name='healthcareimage'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <Input type='file' placeholder='logo.png jpg jpeg ...' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
 
        </div>
        <Button className='w-full mt-6' type='submit'>
          Add
        </Button>
      </form>    
    </Form>
  );
};

export default AddHealthCareHome;
